SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `etap`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `gameid`     int(20) DEFAULT NULL,
    `nomeruser`  int(20) DEFAULT NULL,
    `userid`     int(20) DEFAULT NULL,
    `factoruser` int(20) DEFAULT NULL,
    `su1`        int(20) DEFAULT NULL,
    `su2`        int(20) DEFAULT NULL,
    `su3`        int(20) DEFAULT NULL,
    `su4`        int(20) DEFAULT NULL,
    `su5`        int(20) DEFAULT NULL,
    `timeuser`   int(20) DEFAULT NULL,
    `summa`      int(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 21;

CREATE TABLE IF NOT EXISTS `namegames`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `namegames` varchar(255) DEFAULT NULL,
    `priznak`   int(11) NOT NULL,
    `shtrafid`  int(11) NOT NULL,
    `su`        int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 97;

CREATE TABLE IF NOT EXISTS `rcusers`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `usernumber` int(5)  NOT NULL,
    `username`   varchar(50) DEFAULT NULL,
    `factor`     int(5)      DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 12;

CREATE TABLE IF NOT EXISTS `shtrafball`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `shtrafname` varchar(255) DEFAULT NULL,
    `shtrafball` int(5)       DEFAULT NULL,
    `ball`       int(5)       DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 11;

CREATE VIEW `etapview` AS
select `a`.`id`         AS `id`,
       `a`.`gameid`     AS `gameid`,
       `a`.`nomeruser`  AS `nomeruser`,
       `a`.`userid`     AS `userid`,
       `a`.`factoruser` AS `factoruser`,
       `a`.`su1`        AS `su1`,
       `a`.`su2`        AS `su2`,
       `a`.`su3`        AS `su3`,
       `a`.`su4`        AS `su4`,
       `a`.`su5`        AS `su5`,
       `a`.`timeuser`   AS `timeuser`,
       `a`.`summa`      AS `summa`,
       `b`.`namegames`  AS `namegames`,
       `c`.`username`   AS `username`
from ((`etap` `a` left join `namegames` `b` on ((`a`.`gameid` = `b`.`id`)))
         left join `rcusers` `c` on ((`a`.`userid` = `c`.`id`)));

CREATE VIEW `namegamesview` AS
select `a`.`id`         AS `id`,
       `a`.`namegames`  AS `namegames`,
       `a`.`shtrafid`   AS `shtrafid`,
       `b`.`shtrafname` AS `shtrafname`,
       `b`.`shtrafball` AS `shtrafball`
from (`namegames` `a`
         left join `shtrafball` `b` on ((`a`.`shtrafid` = `b`.`id`)))
where (`a`.`priznak` = 1);
