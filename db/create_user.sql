insert into users
(given_name, family_name, email, region, auth_id)
values ($1, $2, $3, $4, $5)
returning *;