CREATE database mydb;
use mydb;

CREATE table themes(
	idTheme INT(10) NOT NULL auto_increment PRIMARY KEY,
    theme VARCHAR(50)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE table words(
	idWord INT(10) NOT NULL PRIMARY KEY auto_increment,
    word VARCHAR(50),
    mean VARCHAR(50),
    idTheme INT(10),
    FOREIGN KEY (idTheme) REFERENCES themes (idTheme) ON DELETE RESTRICT ON
	UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO themes(idTheme, theme) VALUES
(1, "Animals"),
(2, "Occupations"),
(3, "Plants"),
(4, "Clothes"),
(5, "Drinks");

INSERT INTO words(word, mean, idTheme) VALUES
("chicken", "gà", 1),
("bear", "gấu", 1),
("monkey", "khỉ", 1),
("tiger", "hổ", 1),
("rhinoceros", "tê giác", 1),
("pharmacist ", "dược sĩ", 2),
("mechanic ", "thợ máy", 2),
("barber ", "thợ cắt tóc", 2),
("tailor ", "thợ may", 2),
("teacher", "giáo viên", 2),
("tree", "cây", 3),
("trunk", "thân cây", 3),
("leaf", "lá cây", 3),
("branch", "cành cây", 3),
("spine", "gai", 3),
("jacket", "áo khoác", 4),
("dress", "váy", 4),
("jeans", "quần bò", 4),
("boots", "ủng", 4),
("hat", "mũ", 4),
("beer", "bia" ,5),
("coffee", "cà phê", 5),
("milk" , "sữa", 5),
("tea", "trà", 5),
("soda", "nước ngọt có ga", 5);

