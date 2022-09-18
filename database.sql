CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (300) NOT NULL,
	"description" VARCHAR (300) NOT NULL,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO gallery 
	(path, description)
VALUES 
	('/images/images1.png', 'Photo of Honolulu, Hawaii Number 1.'),
	('/images/images2.png', 'Photo of Honolulu, Hawaii Number 2.'),
	('/images/images3.png', 'Photo of Honolulu, Hawaii Number 3.'),
	('/images/images4.png', 'Photo of Honolulu, Hawaii Number 4.'),
	('/images/images5.png', 'Photo of Honolulu, Hawaii Number 5.'),
	('/images/images6.png', 'Photo of Acai Bowl in Honolulu, Hawaii Number 6.');
