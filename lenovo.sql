SET NAMES UTF8;
DROP DATABASE IF EXISTS lenovo;
CREATE DATABASE lenovo CHARSET=UTF8;
USE lenovo;
CREATE TABLE pic(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(64),
	url VARCHAR(64),
	price FLOAT(10,2)
);
INSERT INTO pic VALUES(
	NULL,
	'小新Air 12 WiFi-金',
	'img/like5.jpg',
	'2999'
);
INSERT INTO pic VALUES(
	NULL,
	'联想U41-70-IFI(象牙白)',
	'img/like6.jpg',
	'4299'
);
INSERT INTO pic VALUES(
	NULL,
	'联想YOGA平板-3-8寸WiFi版',
	'img/like7.jpg',
	'999'
);
INSERT INTO pic VALUES(
	NULL,
	'小新310经典版-500G',
	'img/like8.jpg',
	'4399'
);
INSERT INTO pic VALUES(
	NULL,
	'天逸300-14英寸',
	'img/like9.jpg',
	'3799'
);
INSERT INTO pic VALUES(
	NULL,
	'联想Think dell',
	'img/like10.jpg',
	'4299'
);
CREATE TABLE username(
	cmd INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(64),
	pwd VARCHAR(100)
);
INSERT INTO username VALUES(
	NULL,
	'changjian',
	'123456'
)
