select *
from products p
join images i
on p.product_id = i.product_id
where category = $1
and i.main = true