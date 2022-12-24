CREATE DATABASE Pressa;

\ c Pressa CREATE EXTENSION pgcrypt;

CREATE TYPE is_active AS ENUM('active', 'deleted');

CREATE TYPE on_off_line AS ENUM ('online', 'offline');

CREATE TYPE user_type AS ENUM ('jismoniy shaxs', 'yuridik shaxs');

CREATE TYPE category_type AS ENUM ('it', 'dizayn', 'Ishlar', 'ta''lim');

CREATE TYPE subcategory_type AS ENUM(
  'web dasturlash',
  'mobile dasturlash',
  'ui/ux dizayn',
  'grafik dizayn',
  'Tikuvchilik',
  'Online repititor',
  'matematika',
  'fizika'
);

CREATE TABLE categories(
  category_id serial primary key,
  category_title category_type not null
);

CREATE TABLE subcategories(
  subcategory_id serial primary key,
  subcategory_title subcategory_type not null,
  category_id int references categories(category_id)
);

CREATE TABLE join_categories(
  category_id int references categories(category_id),
  subcategory_id int references subcategories(subcategory_id)
) CREATE TABLE admins(
  admin_id serial primary key,
  username varchar(32) not null,
  password text not null
);

insert into
select
  *
from
  join_categories;

CREATE TABLE users(
  user_id serial primary key,
  fullname varchar(64) not null,
  user_profession varchar(64) not null,
  user_type user_type not null,
  user_company varchar(64) default ''
);

CREATE TABLE Meeting(
  meet_id serial primary key,
  meet_title varchar(64) not null,
  meet_description text not null,
  meet_text text not null,
  meet_date date not null,
  meet_time time default current_time not null,
  meet_status on_off_line not null,
  meet_link_youtube text,
  meet_image text not null,
  subcategory_id int references subcategories(subcategory_id) not null,
  created_at timestamp default current_timestamp not null,
  user_id int references users(user_id) not null,
  status is_active default 'deleted' not null
);

INSERT INTO
  categories(category_title)
values
('it'),
('dizayn'),
('Ishlar'),
('ta''lim');

INSERT INTO
  subcategories(subcategory_title, category_id)
values
('web dasturlash', 1),
('mobile dasturlash', 1),
('ui/ux dizayn', 2),
('grafik dizayn', 2),
('Tikuvchilik', 3),
('Online repititor', 3),
('matematika', 4),
('fizika', 4);

INSERT INTO
  users(fullname, user_profession, user_type, user_company)
values
(
    'nargiza abdulayeva',
    'web dasturchi',
    'jismoniy shaxs',
    ''
  ),
(
    'Lola Hamidova',
    'Tikuvchi',
    'yuridik shaxs',
    'Lola industries'
  );

INSERT INTO
  users(fullname, user_profession, user_type)
values
(
    'marjona rasulova',
    'dizayn',
    'jismoniy shaxs'
  );

INSERT INTO
  join_categories(category_id, subcategory_id)
values
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8);

select
  c.category_id,
  category_title,
  json_object_agg(s.subcategory_id, s.subcategory_title)
from
  join_categories j
  join categories c on c.category_id = j.category_id
  left join subcategories s on s.subcategory_id = j.subcategory_id
group by
  c.category_id
order by
  c.category_id;

insert into
  Meeting(
    meet_title,
    meet_description,
    meet_text,
    meet_date,
    meet_time,
    meet_status,
    meet_link_youtube,
    meet_image,
    subcategory_id,
    user_id
  )
values
(
    'Ishchi',
    'tikuvchi',
    'zor tikish va bichish',
    '2022-12-15',
    '13:00',
    'online',
    'ADSAFGHJG',
    'jock',
    1,
    1
  );

insert into
  Meeting(
    meet_title,
    meet_description,
    meet_text,
    meet_date,
    meet_time,
    meet_status,
    meet_link_youtube,
    meet_image,
    subcategory_id,
    user_id
  )
values
(
    'ta''lim',
    'fan',
    'nimadirasdas',
    '2022-12-15',
    '13:00',
    'offline',
    'ADSAFGHJG',
    'luck',
    7,
    2
  );
(
  'adsdf',
  'dasfad',
  'adasdasd',
  'adasdasdda',
  'fotima',
  '2012-12-26',
  'online',
  'jismoniy',
  'dasdadadasdasdadas'
),
(
  'adsdf',
  'dasfad',
  'adasdasd',
  'adasdasdda',
  'suhrob',
  '2010-12-26',
  'offline',
  'yuridik',
  'dasdadadasdasdadas'
),
(
  'Tikuvchi',
  'Tikuvchilik sanati',
  'Tikuvchi bolsh sirlari',
  'adasdasdda',
  'Hamida',
  '2010-12-26',
  'offline',
  'ishlar',
  'project'
);

select
  m.meet_id id,
  fullname speaker,
  user_profession proffesion,
  meet_title title,
  meet_description description,
  meet_text text,
  meet_date date,
  meet_time time,
  meet_status status,
  meet_link_youtube youtube,
  meet_image image
from
  meeting m
  left join users u on u.user_id = m.user_id;





-- insert into Meeting(meet_title,meet_description,meet_text,meet_date,meet_time,meet_status,meet_link_youtube,subcategory_id,user_id)values('biznes','yangicha biznes','nimadirasdas','2022-12-15','13:00','online','ADSAFGHJG',5,2);
-- insert into Meeting(meet_title,meet_description,meet_text,meet_date,meet_time,meet_status,meet_link_youtube,subcategory_id,user_id)values('ta''lim','yangicha ta''lim','nimadirasdas','2022-12-15','13:00','offline','ADSAFGHJG',7,1);
-- insert into Meeting(meet_title,meet_description,meet_text,meet_date,meet_time,meet_status,meet_link_youtube,subcategory_id,user_id)values('biznes2','yangicha biznes2','nimadirasdas','2022-12-15','13:00','online','ADSAFGHJG',6,2);
-- select
--   categories.*,
--   json_object_agg(subcategory_id,subcategory_title) subcategories
--  from categories
-- left join subcategories on categories.category_id=subcategories.category_id
-- group by categories.category_id;
--  array_agg(subcategory_title::varchar,subcategory_id::int)
--  select
--  m.meet_id id,
--  fullname speaker,
--  meet_title title,
--  meet_description description,
--  meet_text text,
--  meet_date date,
--  meet_time time,
--  meet_status status,
--  meet_link_youtube youtube,
--  created_at createdAt,
--  array_agg(image_link) images
--  from Meeting m
-- join users on users.user_id=m.user_id
-- join join_image j on j.meet_id=m.meet_id
-- join images i on i.image_id=j.image_id
-- group by m.meet_id,users.fullname;
--  fullname,
--  array_agg(image_link) imageLinks,
--  join users on users.user_id=m.user_id
-- group by meet_id
-- order by meet_id;
-- join Meeting m on m.meet_id=join_image.meeting_id
-- join images i on i.image_id=join_image.image_id
-- select i.*,meet_title from join_image j
-- join images i on i.image_id=j.image_id
-- join meeting m on m.meet_id=j.meet_id
-- group by i.image_id;
-- values(4,4);
-- select 
-- meet_id,
-- meet_title,
-- meet_description,
-- meet_text,
-- meet_date,
-- meet_time,
-- meet_status,
-- meet_link_youtube,
-- array_agg(image_link) image_link 
-- from join_image
-- join Meeting m on m.meet_id=join_image.meet_id
-- join images i on i.image_id=join_image.image_id
-- group by meet_id
-- order by meet_id;