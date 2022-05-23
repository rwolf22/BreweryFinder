BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP TABLE IF EXISTS beer CASCADE;
DROP SEQUENCE IF EXISTS seq_beer_id;
DROP TABLE IF EXISTS brewery CASCADE;
DROP SEQUENCE IF EXISTS seq_brewery_id;
DROP TABLE IF EXISTS review CASCADE;
DROP SEQUENCE IF EXISTS seq_review_id;
DROP TABLE IF EXISTS news_events CASCADE;
DROP SEQUENCE IF EXISTS seq_news_events_id;
DROP TABLE IF EXISTS favorite_brewery CASCADE;
DROP TABLE IF EXISTS favorite_beer CASCADE;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_beer_id
	INCREMENT BY 1
	NO MAXVALUE
	NO MINVALUE
	CACHE 1;

CREATE SEQUENCE seq_brewery_id
	INCREMENT BY 1
	NO MAXVALUE
	NO MINVALUE
	CACHE 1;

CREATE SEQUENCE seq_review_id
	INCREMENT BY 1
	NO MAXVALUE
	NO MINVALUE
	CACHE 1;

CREATE SEQUENCE seq_news_events_id
	INCREMENT BY 1
	NO MAXVALUE
	NO MINVALUE
	CACHE 1;

CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE beer (
	beer_id int DEFAULT nextval('seq_beer_id'::regclass) NOT NULL,
	brewery_id int NOT NULL,
	name varchar(50) NOT NULL,
	type varchar(50) NOT NULL,
	abv decimal(3,1) NOT NULL,
	description varchar(200) NOT NULL,
	image varchar(50),
	CONSTRAINT PK_beer PRIMARY KEY (beer_id)
);

CREATE TABLE brewery (
	brewery_id int DEFAULT nextval('seq_brewery_id'::regclass) NOT NULL,
	owner_id int NOT NULL,
	name varchar(50) NOT NULL,
	address varchar(50) NOT NULL,
	description varchar(200),
	image varchar(50),
	CONSTRAINT PK_brewery PRIMARY KEY (brewery_id)
);

CREATE TABLE review (
	review_id int DEFAULT nextval('seq_review_id'::regclass),
	beer_id int NOT NULL,
	author varchar(50) NOT NULL,
	rating int NOT NULL,
	review varchar(200),
	CONSTRAINT PK_review PRIMARY KEY (review_id)
);

CREATE TABLE news_events (
	news_events_id int DEFAULT nextval('seq_news_events_id'),
	brewery_id int NOT NULL,
	name varchar(50) NOT NULL,
	event_date DATE NOT NULL,
	description varchar(200),
	CONSTRAINT PK_news_events PRIMARY KEY (news_events_id)
);

CREATE TABLE favorite_brewery (
	user_id int NOT NULL,
	brewery_id int NOT NULL,
	CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
	CONSTRAINT FK_brewery_id FOREIGN KEY (brewery_id) REFERENCES brewery(brewery_id)
);

CREATE TABLE favorite_beer (
	user_id int NOT NULL,
	beer_id int NOT NULL,
	CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
	CONSTRAINT FK_brewery_id FOREIGN KEY (beer_id) REFERENCES beer(beer_id)
);

ALTER TABLE beer
ADD CONSTRAINT FK_brewery_id 
FOREIGN KEY (brewery_id) REFERENCES brewery(brewery_id);

ALTER TABLE brewery
ADD CONSTRAINT FK_owner_id 
FOREIGN KEY (owner_id) REFERENCES users(user_id);

ALTER TABLE review
ADD CONSTRAINT FK_beer_id 
FOREIGN KEY (beer_id) REFERENCES beer(beer_id);

ALTER TABLE news_events
ADD CONSTRAINT FK_brewery_id 
FOREIGN KEY (brewery_id) REFERENCES brewery(brewery_id);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');
INSERT INTO brewery (owner_id, name, address, description, image) VALUES (2, 'Test Brewery', '123 Test Drive', 'This is a brewery for testing', 'test.image');
INSERT INTO beer (brewery_id, name, type, abv, description, image) VALUES (1, 'Test Beer', 'lager', 6.4, 'This is a test beer', 'test.image');
INSERT INTO news_events (brewery_id, name, event_date, description) VALUES (1, 'Test event', '2022-05-19', 'This is an event for testing');
INSERT INTO review (beer_id, author, rating, review) VALUES (1, 'Rory', 5, 'This is a test review');

COMMIT TRANSACTION;
