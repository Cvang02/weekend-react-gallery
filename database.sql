CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (300),
	"description" TEXT,
	"likes" INTEGER
);

INSERT INTO gallery 
	(path, description, likes)
VALUES 
	('/images/images1.png', 'Photo of Hawaii Number 1.', '0'),
	('/images/images2.png', 'Photo of Hawaii Number 2.', '0'),
	('/images/images3.png', 'Photo of Hawaii Number 3.', '0'),
	('/images/images4.png', 'Photo of Hawaii Number 4.', '0'),
	('/images/images5.png', 'Photo of Hawaii Number 5.', '0'),
	('/images/images6.png', 'Photo of Hawaii Number 6.', '0');
    