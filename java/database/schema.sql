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
	description varchar(1000) NOT NULL,
	image varchar(50),
	CONSTRAINT PK_beer PRIMARY KEY (beer_id)
);
-- ROLLBACK;
CREATE TABLE brewery (
	brewery_id int DEFAULT nextval('seq_brewery_id'::regclass) NOT NULL,
	owner_id int NOT NULL,
	name varchar(50) NOT NULL,
	address varchar(50) NOT NULL,
	description varchar(400),
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

-- INSERT INTO brewery (owner_id, name, address, description, image) VALUES (2, 'Test Brewery', '123 Test Drive', 'This is a brewery for testing', 'test.image');
-- INSERT INTO beer (brewery_id, name, type, abv, description, image) VALUES (1, 'Test Beer', 'lager', 6.4, 'This is a test beer', 'test.image');
-- INSERT INTO news_events (brewery_id, name, event_date, description) VALUES (1, 'Test event', '2022-05-19', 'This is an event for testing');
-- INSERT INTO review (beer_id, author, rating, review) VALUES (1, 'Rory', 5, 'This is a test review');

--Breweries
INSERT INTO brewery (owner_id, name, address, description) VALUES (2, 'Twin Barrel Brewing Co.', '123 North Street', 'We are a 8 barrel brewery, dedicated to crafting exceptional beers. Direct from owner and head brewer Blane Perry''s passion for the art of brewing, we offer a selection of signature beers, rotating seasonal specialties and experimental beers using locally sourced ingredients. Flight tastings, pints and crowler fills are available in our tasting room.');

--Beer
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Summerteeth Hard Seltzer', 'Hard Seltzer', 4.6, 'If beer''s not your thing, you''ll love our hard seltzer. Enjoy it straight from the tap either unflavored or with Pineapple or Prickly Pear Key Lime.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Summerteeth Frozen Seltzer', 'Hard Seltzer', 5.0, 'Summerteeth Seltzer, a collab with Ocelot, is a frozen, daquiri-style hard seltzer that will cool you off in the summertime heat. This weeks flavor(s): Strawberry and Pear.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Fish Taco Lager at the Beach', 'Lager', 4.2, 'Fish Taco Lager but make it beachy! We added key lime puree to our famous Fish Taco lager to help you count down the days to summertime!');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'El Borracho Burro Dark Lager', 'Lager', 5.4, 'Something magical happens when the Mexican and American cultures combine—Tex-Mex, Norteño, Lucha Libre and now El Borrocho Burro Dark Lager inspired by the El Borrocho Burro bar in Isla Mujeres, Mexico. Just like burritos, La Bamba and masked wrestlers, this dark copper Mexican lager has the best of all worlds, featuring Vienna, Pilsner, Munich, Carafa, and Chocolate malts for a rich toasted bread crust start with a hint of chocolate and caramel. This ecru-headed beer then finishes dry and malty with a restrained bitterness provided by the Hallertauer and Tettnang hops. Sure, it might translate to the Drunken Ass, but that''s what it takes in the form of Mark Dixon and Blane Perry to produce this spot on take on a Mexican lager. Like all Sinistral beers this one is true to its influences but combines north and south of the border to produce a brew worthy of Enchiladas, Nacho Libre and Los Lobos.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'King Kamehameha Apricot Wheat', 'Wheat Beer', 5.3, 'King Kamehameha Wheat is an American Pale Wheat beer that combines 2-Row and White Wheat to form a deliciously crushable beer. “King K” Apricot Wheat is our latest version of this beer, out just in time for spring.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Sweet Sassy, My Lassi', 'Sour', 6.8, 'We teamed up with our friends from Mustang Sally and Public House Brewery and Kitchen to bring you Sweet Sassy, My Lassi! It''s a lightly soured brew that opens with cardamom and mango, delivers soft notes of vanilla and cream and finishes with a light dry sweetness. Brewed with Pilsner, Vienna and Acidulated malts this 6.8% ABV snort is inspired by the tart Indian beverage Lassi and is sassy like your favorite 90s teen magazine. As with all Sinistral beers Sweet Sassy My Lassi is true to its inspiration and “You don''t have to get out the checkbook to pay grandma for the rubdown!”');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Soft Sip IPA', 'IPA', 6.5, 'Sometimes you just want a light body IPA that is bone dry, hop forward, with bright notes of Pineapple and Mango. No, it''s not a Brut. Made with Pale, Wheat, Victory malts, hopped with Centennial, Amarillo and Citra, the Soft Sip IPA is just what you need. Coming in at 6.5% ABV and around IBU, this refreshingly crisp beer will be a crusher.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Er'' Day IPA', 'IPA', 7.0, 'Every day I dream about a golden, West Coast IPA hopped up on lots of Citra, Mosaic, Nugget and Simcoe hops. One with a rich maltiness from Pale, Malted Oats, and Biscuit malts to stand up to and even out that hop bomb. Maybe one that delivers 7.0% AVB of goodness along some piny-ness and maybe a little tropical fruit. With Er''day IPA I have to dream no longer and can simply head to Sinistral every day to enjoy my dream beer. Like all Sinistral beers Er''Day is true to its influences and what dreams are made of.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Falily of Trees DIPA', 'IPA', 8.9, 'A collaboration with our dearest of friends at Ocelot Brewing Company, Family of Trees is a bicoastal new school throwback Double IPA. Or something like that. This stealthy beast was brought to life with a two-row barley base, plus a generous addition of English pale malt and malted rye. We hopped it with Centennial in the kettle, then Simcoe and more Centennial during whirlpool, and finally Simcoe and Azacca after primary fermentation. In the end, Family of Trees is a little Northeast and a little West Coast. It''s juicy with a full body… but also a firm bitterness and dry finish. There''s apricot and peach, mango and pineapple, with undercurrents of red berry and pine sap.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Van Dang!', 'Belgian Strong Golden Ale', 9.1, 'When you think Belgium, you think strong as in the “Muscles from Brussels” and as in a robust golden ale. Though strong, the Van Dang! opens with an effervescent nose featuring hints of pear, but soon finds a hard target with a spicy note of alcohol that characterizes these Belgian brutes. Generous hopping with Willamette, Mt. Hood and Northern Brewer hops provides a triple impact. Brewing with Pilsner, Caravienne, and Acidulated malts and beet sugar may be a maximum risk, but its 9.1% ABV and dry finish are no death warrant. Like all Sinistral beers Van Dang! Golden Strong Ale is true to its influences and so Belgian it leaves even JCVD nowhere to run.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Arden''s Amber Ale', 'Amber', 5.0, 'Just like the little girl this beer is a tribute to, you won''t be able to stop smiling once you''ve tasted our A3, which is made using a combination of pale and crystal malt and gives this beer a malty finish with subtle notes of caramel and toffee.');
INSERT INTO beer (brewery_id, name, type, abv, description) VALUES (1, 'Heavy Rider Barrel Aged Stour', 'Stout', 9.0, 'Our Heavy Rider stout aged in Buffalo Trace barrels for a year. Brewed with Maris, Crystal 80, Crystal 120, Chocolate, Wheat, flaked oats and Carafa Malts resulting in a very smooth stout. Heavy Rider packs a nice chocolate flavor with notes of caramel and a touch of booziness. Coming in at 9% ABV, enjoy this one responsibly.');

--Events
INSERT INTO news_events (brewery_id, name, event_date, description) VALUES (1, 'Bingo Night', '2022-06-01', 'Every Wednesdy night from 9pm-close is BINGO NIGHT! Bring a friend, grab a beer, and try to win gift card to many local stores and restaurants.');
INSERT INTO news_events (brewery_id, name, event_date, description) VALUES (1, 'Trivia Night', '2022-06-02', 'Every Thursday night from 9pm-close is TRIVIA NIGHT! Bring a friend, grab a beer, and try to win gift card to many local stores and restaurants.');
INSERT INTO news_events (brewery_id, name, event_date, description) VALUES (1, 'Food Truck Week', '2022-06-06', 'All week we will have a new food truck on site each day.');
INSERT INTO news_events (brewery_id, name, event_date, description) VALUES (1, '50% Off Pint Glasses', '2022-06-10', 'Come in and get yourself a Twin Barrel pint glass for half price.');

--Reviews
INSERT INTO review (beer_id, author, rating, review) VALUES (1, 'Michele', 4, 'I''m not a big fan of beer and this is a great alternative.');
INSERT INTO review (beer_id, author, rating, review) VALUES (1, 'Brandon', 3, 'Decent summer drink.');
INSERT INTO review (beer_id, author, rating, review) VALUES (2, 'Daniel', 4, 'Hits the spot on a hot day');
INSERT INTO review (beer_id, author, rating, review) VALUES (2, 'David', 5, 'Great summer drink');
INSERT INTO review (beer_id, author, rating, review) VALUES (3, 'Larry', 3, 'Tastes better with a lime');
INSERT INTO review (beer_id, author, rating, review) VALUES (3, 'David', 5, 'I didn''t think it would tase good by the name but it was suprisingly delicious');
INSERT INTO review (beer_id, author, rating, review) VALUES (4, 'Cory', 4, 'Lighter tasting than it looks.');
INSERT INTO review (beer_id, author, rating, review) VALUES (4, 'Justin', 3, 'Nice dark lager');
INSERT INTO review (beer_id, author, rating, review) VALUES (5, 'Ray', 3, 'Some of the other flavors are better but this is subtle which is nice.');
INSERT INTO review (beer_id, author, rating, review) VALUES (5, 'Larry', 4, 'Nice hint of apricot.');
INSERT INTO review (beer_id, author, rating, review) VALUES (6, 'Jennifer', 5, 'Perfect mango flavor');
INSERT INTO review (beer_id, author, rating, review) VALUES (6, 'Michelle', 2, 'Way too sour.');
INSERT INTO review (beer_id, author, rating, review) VALUES (7, 'Mark', 4, 'Great for trivia night.');
INSERT INTO review (beer_id, author, rating, review) VALUES (7, 'Craig', 5, 'This might be my new all-time favorite.');
INSERT INTO review (beer_id, author, rating, review) VALUES (8, 'Mark', 4, 'The perfect beer on a tuesday');
INSERT INTO review (beer_id, author, rating, review) VALUES (8, 'Fred', 3, 'More bitter than expected');
INSERT INTO review (beer_id, author, rating, review) VALUES (9, 'Bob', 4, 'I can taste the Ocelot influence.');
INSERT INTO review (beer_id, author, rating, review) VALUES (9, 'David', 4, 'Nice fruit flavor');
INSERT INTO review (beer_id, author, rating, review) VALUES (10, 'Larry', 4, 'Very good');
INSERT INTO review (beer_id, author, rating, review) VALUES (10, 'Wes', 2, 'Too strong!');
INSERT INTO review (beer_id, author, rating, review) VALUES (11, 'Chris', 3, 'Hoppy, bitter, astringent, malty. A good red. Tastes great, not filling.');
INSERT INTO review (beer_id, author, rating, review) VALUES (11, 'Sean', 3, 'Very good red Ale');
INSERT INTO review (beer_id, author, rating, review) VALUES (12, 'Jeff', 4, 'THATS got a LOT going on.');
INSERT INTO review (beer_id, author, rating, review) VALUES (12, 'Kelley', 4, 'Great for date night');

COMMIT TRANSACTION;
