update users
set given_name = $1,
    family_name = $2,
    email = $3,
    region = $4
where user_id = $5
returning *;

