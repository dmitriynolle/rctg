DROP VIEW `etapview`;

ALTER TABLE `etap`
    ADD `time` INT(20),
    ADD `summa` INT(20);

CREATE VIEW `etapview` AS select
                              `a`.`id` AS `id`,
                              `a`.`gameid` AS `gameid`,
                              `a`.`nomeruser` AS `nomeruser`,
                              `a`.`userid` AS `userid`,
                              `a`.`factoruser` AS `factoruser`,
                              `a`.`su1` AS `su1`,
                              `a`.`su2` AS `su2`,
                              `a`.`su3` AS `su3`,
                              `a`.`su4` AS `su4`,
                              `a`.`su5` AS `su5`,
                              `a`.`timesu1` AS `timesu1`,
                              `a`.`timesu2` AS `timesu2`,
                              `a`.`timesu3` AS `timesu3`,
                              `a`.`timesu4` AS `timesu4`,
                              `a`.`timesu5` AS `timesu5`,
                              `a`.`time` AS `time`,
                              `a`.`summa` AS `summa`,
                              `b`.`namegames` AS `namegames`,
                              `c`.`username` AS `username`
                          from ((`etap` `a` left join `namegames` `b` on((`a`.`gameid` = `b`.`id`)))
                                   left join `rcusers` `c` on((`a`.`userid` = `c`.`id`)));