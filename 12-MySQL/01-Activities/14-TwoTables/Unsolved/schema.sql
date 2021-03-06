DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE topAlbum (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT topalbum.year, topalbum.position, topalbum.album, top5000.song, topalbum.artist
FROM topalbum  INNER JOIN top5000 
ON (topalbum.artist = top5000.artist and topalbum.year = top5000.year)
WHERE (topalbum.artist = 'Queen' and top5000.artist = 'Queen')
ORDER BY topalbum.year, topalbum.position;
          
SELECT * FROM top5000;