module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");

    db.getProductImages().then(resp => {
      res.status(200).send(resp);
    });
  },

  updateUser: (req, res) => {
    const db = req.app.get("db");
    console.log(req.session.user);
    const { id } = req.params;
    const { given_name, family_name, email, select } = req.body;
    console.log(given_name, select, id);

    db.updateUser([given_name, family_name, email, select, id]).then(resp => {
      res.status(200).send(resp);
    });
  },

  productsByIds: async (req, res) => {
    //req.body.ids to create db query to ask for products
    const db = req.app.get("db");
    let arrayOfProducts = [];
    for (let i = 0; i < req.body.ids.length; i++) {
      let res = await db.products_by_ids([req.body.ids[i]]);
      arrayOfProducts.push(res[0]);
    }
    //send back res from db call
    res.status(200).send(arrayOfProducts);
  },

  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_product([id]).then(resp => {
      res.status(200).send(resp);
    });
  },
  getCategory: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.getProductsByCategory([id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// addToCart: (req, res) => {
//   const db = req.app.get("db");

//   db.addProductsToCart().then(resp => {
//     res.status(200).send(resp);
//   });
// }
