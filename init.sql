CREATE TABLE IF NOT EXISTS `user`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `account_id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `header` VARCHAR(40) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `createTime` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `article`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `article_id` INT NOT NULL,
   `title` VARCHAR(100) NOT NULL,
   `author` VARCHAR(40) NOT NULL,
   `content` VARCHAR(2000) NOT NULL,
   `createTime` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO user 
    -> (account_id, name, header,password,createTime)
    -> VALUES
    -> (1001, "阿飞", "xx","yf6533490",NOW());
	
INSERT INTO article
 (article_id, title, author,content,createTime) 
 VALUES 
 (10002, "eggg.js实战", "阿飞","文章内容",'2018-04-11 10:50:10');

INSERT INTO user(account_id,name,header)