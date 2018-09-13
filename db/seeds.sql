drop table if exists products;

create table products
(
product_id serial primary key,
category text,
title text,
description text,
price float(2),
item_num text
);
select * 
from products;


drop table if exists users;

create table users
(
user_id serial primary key,
given_name text,
family_name text,
email text,
region text,
auth_id text
);

select *
from users;



drop table if exists carts;

create table carts
(
cart_id serial primary key,
user_id integer,
product_id integer,
quantity integer
);

select *
from carts;


drop table if exists images;

create table images
(
img_id serial primary key,
img text,
product_id integer,
main boolean
);

select *
from images;


INSERT INTO products(category, title, description, price, item_num) 
VALUES
('20V Power Share Tools', '2X20V 13" CORDLESS STRING TRIMMER & WHEELED EDGER - TOOL ONLY', 'Product uses two 20V Power Share batteries to deliver 40V Power and Performance. Innovative Command Feed™ spool system for instant line feeding at the click of a button. Variable speed throttle control extends run time and provides power for various grass conditions. Pivoting cutting head and straight shaft design can tackle any terrain. With various ways to adjust the trimmer to any job, this trimmer/edger can easily manage any home-site up to a 1/2 acre. Being a part of the 20V Power Share program allows endless possibilities to share batteries with many other tools. *Battery & Charger Not Included', 99.99, 'WG184.9'),
('20V Cordless Tools', '20V GT 3.0 TRIMMER & TURBINE BLOWER COMBO KIT', 'Patented Command Feed™ Technology automatically extends fresh line, as you need it. Don''t stop. Just press and trim. Telescopic shaft adjusts to users height and posture. Rubberized twin wheel set supports and guides the edger. High capacity air volume with turbine fan technology (340 CFM). Hyper-stream air nozzle for extra tough conditions', 179.99, 'WG921.1'),
('Drills & Drivers', 'SD DRIVER W/ SCREW HOLDER', 'Screw Holder attachment holds screws firmly in place for one-handed operation. Rapid Reloadable Cartridge allows you to store 6 bits in the tool, eliminating lost bits. Advance the correct bit with a simple slide-action. Powerful 4V MaxLithium battery holds a charge for up to 18 months', 39.99, 'WX255L'),
('Saws', '20V JAWSAW CORDLESS CHAINSAW', 'Cut or trim materials up to 4 inches in diameter. Innovative auto-tension feature guarantees optimum tension at all times. Features an automatic chain oiler with oil level indicator. Blade housing allows for safe cuts directly on the ground. Powerful and lightweight MaxLithium battery delivers long-lasting performance', 149.99, 'WG320'),
('20V Accessories', '20V 6.0 AH MAXLITHIUM BATTERY', 'Our most powerful 20V battery--6.0 Ah delivers up to triple the run time of the 2.0 Ah battery. Delivers increased runtime and powers your 20V cordless WORX tool through the entire job. Professional grade, gas-like power with none of the emissions. Compact and lightweight — helps reduce fatigue while you''re working. Part of the 20V Power Share platform that lets you save money by sharing batteries among multiple 20V tools. Recommended for use with WA3868 20V quick charger', 99.99, 'WA3671');

INSERT INTO images(img, product_id, main) 
VALUES
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_right.1534424344.jpg', 1, true),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_edger_alt.1534424345.jpg', 1, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_alt-1.1534424345.jpg', 1, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_edger.1534424345.jpg', 1, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_left.1534424345.jpg', 1, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_alt-2.1534424345.jpg', 1, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg184.9_trimmer_front.1534424345.jpg', 1, false),

('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg921.1_kit_new.1534424854.jpg', 2, true),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg163_angle.1534424854.jpg', 2, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg163_closeup_edger.1534424854.jpg', 2, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg163_closeup_underneath.1534424854.jpg', 2, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg546.9_profile.1534424854.jpg', 2, false),

('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/x/wx255l-base.1534424654.jpg', 3, true),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/x/wx255l-1.1534424545.jpg', 3, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/x/wx255l-2.1534424545.jpg', 3, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/x/wx255l-5.1534424545.jpg', 3, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/x/wx255l-3.1534424545.jpg', 3, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/x/wx255l-4.1534424545.jpg', 3, false),

('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg320-base_2.1534424168.jpg', 4, true),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg320_1.1534424168.jpg', 4, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg320_2.1534424168.jpg', 4, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg320_3.1534424168.jpg', 4, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg320_4.1534424168.jpg', 4, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg320.1534424168.jpg', 4, false),

('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/a/wa3671_20vpowershare6ah.1534424556.jpg', 5, true),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/a/wa3671_20vpowershare6ah_2.1534424556.jpg', 5, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/a/wa3671_20vpowershare6ah_3.1534424556.jpg', 5, false),
('https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/p/o/power_share_image_1_.1534424556.jpg', 5, false),