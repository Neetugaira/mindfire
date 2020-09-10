DROP DATABASE IF EXISTS NewsFeed;

create database NewsFeed;
use NewsFeed ;
create table user (user_id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40), email VARCHAR(40) , password VARCHAR(40));

create table category (category_id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY, category_title VARCHAR(80));


create table agency (agency_id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY , agency_name VARCHAR(80), agency_logo_path VARCHAR(100));


create table news (news_id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
news_title VARCHAR(100),
news_description TEXT,
news_publish_date_time bigint(230),
news_link varchar(255) ,
click_count int(10),
category_id int(10),
agency_id  int(10),
FOREIGN KEY (category_id) REFERENCES category(category_id),
FOREIGN KEY (agency_id) REFERENCES agency(agency_id),
UNIQUE (news_link));



create table agency_feed(agency_feed_id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
agency_feed_url VARCHAR(100) ,
agency_id int(10),
category_id int(10),
FOREIGN KEY (agency_id) REFERENCES agency(agency_id),
FOREIGN KEY (category_id) REFERENCES category(category_id));




INSERT INTO user (name,email,password)
VALUES ('Test','Test@gmail.com','Test12345');

INSERT INTO user (name,email,password)
VALUES ('User','user@gmail.com','Test12345');

INSERT INTO category (category_title)
VALUES ("Bussiness");

INSERT INTO category (category_title)
VALUES ("Sports");

INSERT INTO category (category_title)
VALUES ("Entertainment");

INSERT INTO category (category_title)
VALUES ("Education");

INSERT INTO category (category_title)
VALUES ("Life And Style");



INSERT INTO agency (agency_name ,agency_logo_path)
VALUES("Hindustan Times","hindustan_times_logo.png");

INSERT INTO agency (agency_name ,agency_logo_path)
VALUES("The Hindu","hindu_logo.png");


INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency1.png" ,1, 1);
INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency2.png" ,2, 1);
INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency1.png" ,1, 2);
INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency2.png" ,2, 2);

INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency1.png" ,1, 3);
INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency2.png" ,2, 3);
INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency1.png" ,1, 4);
INSERT INTO agency_feed(agency_feed_url, agency_id, category_id)
VALUES ("agency2.png" ,2, 5);
