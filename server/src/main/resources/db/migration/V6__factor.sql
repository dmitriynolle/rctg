ALTER TABLE `namegames`
    ADD `factor` BOOLEAN;

UPDATE `shtrafball` SET
    shtrafname = 'Основное время этапа'
WHERE id=1;

DROP VIEW `namegamesview`;

CREATE VIEW `namegamesview` AS select
    `a`.`id` AS `id`,
    `a`.`namegames` AS `namegames`,
    `a`.`shtrafid` AS `shtrafid`,
    `b`.`shtrafname` AS `shtrafname`,
    `a`.`su` AS `shtrafball`,
    `a`.`ball` AS ball,
    `a`.factor AS factor
    from (`namegames` `a` left join `shtrafball` `b` on((`a`.`shtrafid` = `b`.`id`))) where (`a`.`priznak` = 1);
