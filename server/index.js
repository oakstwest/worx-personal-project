require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const ct = require("./products_controller");
const axios = require("axios");
const stripect = require("./stripe_controller");

const {
  CONNECTION_STRING,
  SERVER_PORT,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  SECRET
} = process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db connection established");
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//endpoints
app.get("/api/products", ct.getProducts);
app.put("/api/users/:id", ct.updateUser);
app.post("/api/products", ct.productsByIds);
app.post("/api/payment", stripect.handlePayment);
app.get("/api/products/:id", ct.getProduct);

// app.get("/api/productimages", ct.getProductImages);
// app.post("/api/cart", ct.addProducts);

app.get("/auth/callback", async (req, res) => {
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };

  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );

  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );

  console.log("user data", resWithUserData.data);
  let { given_name, family_name, email, region, sub } = resWithUserData.data;

  let db = req.app.get("db");

  let foundUser = await db.find_user([sub]);
  if (foundUser[0]) {
    req.session.user = foundUser[0];
    res.redirect("/#/account");
  } else {
    let createdUser = await db.create_user([
      given_name,
      family_name,
      email,
      region,
      sub
    ]);
    req.session.user = createdUser[0];
    res.redirect("/#/account");
  }
});

app.get("/api/user-data", (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send();
  }
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect("http://localhost:3000/");
});

app.delete("/api/user-data/:id", (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;

  db.deleteUser([id]).then(resp => {
    res.status(200).send(resp);
  });
});

app.get("/api/user-data/:id", (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;

  db.get_user_by_id([id]).then(resp => {
    res.status(200).send(resp);
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
