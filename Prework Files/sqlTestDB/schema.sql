CREATE DATABASE gcdc_db;
USE gcdc_db;

CREATE TABLE product_line
(
	id int NOT NULL AUTO_INCREMENT,
	product_line_name VARCHAR(255) NOT NULL,
	product_line_desc VARCHAR(255) NOT NULL,
	slug VARCHAR(128) NULL,
	PRIMARY KEY (id)
);

-- For if the main product line has multiple branches. ie: two species of available wood
CREATE TABLE line_attrib
(
	id int NOT NULL AUTO_INCREMENT,
	line_sub_name VARCHAR(255) NOT NULL,
	line_sub_desc VARCHAR(255) NOT NULL,
	slug VARCHAR(128) NULL,
	product_line_id int(10) NOT NULL,
	PRIMARY KEY (id)
);

-- Main Selector Is For The Primary Piece or KEY Of The Product. ie: Computer Motherboard. In this use case the type of door.
CREATE TABLE main_selectors
(
	id int NOT NULL AUTO_INCREMENT,
	item_number VARCHAR(128) NOT NULL,
	item_description VARCHAR(255) NOT NULL,
	item_short_description VARCHAR(128) NOT NULL,
	slug VARCHAR(128) NULL,
	gen_desc int(5) NOT NULL,
	quantity int(10) unsigned DEFAULT NULL,
	list_price int(10) unsigned DEFAULT NULL,
	product_line_id int(10) NOT NULL,
	line_attrib_id int(5) NOT NULL,
	PRIMARY KEY (id)
)

-- The Below Is For Slug Identifiers In Addition To Unique ID and PrimaryKey

UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE line_attrib SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');
UPDATE product_line SET slug = replace(trim(lower(name)), ' ', '-');

SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';
SELECT * FROM ^insertTableName^ WHERE slug NOT RLIKE '^([a-z0-9]+\-)*[a-z0-9]+$';

UPDATE * SET
    slug = lower(name),
    slug = replace(slug, '.', ' '),
    slug = replace(slug, ',', ' '),
    slug = replace(slug, ';', ' '),
    slug = replace(slug, ':', ' '),
    slug = replace(slug, '?', ' '),
    slug = replace(slug, '%', ' '),
    slug = replace(slug, '&', ' '),
    slug = replace(slug, '#', ' '),
    slug = replace(slug, '*', ' '),
    slug = replace(slug, '!', ' '),
    slug = replace(slug, '_', ' '),
    slug = replace(slug, '@', ' '),
    slug = replace(slug, '+', ' '),
    slug = replace(slug, '(', ' '),
    slug = replace(slug, ')', ' '),
    slug = replace(slug, '[', ' '),
    slug = replace(slug, ']', ' '),
    slug = replace(slug, '/', ' '),
    slug = replace(slug, '-', ' '),
    slug = replace(slug, '\'', ''),
    slug = trim(slug),
    slug = replace(slug, ' ', '-'),
    slug = replace(slug, '--', '-');

UPDATE * SET
    slug = replace(slug, '--', '-');