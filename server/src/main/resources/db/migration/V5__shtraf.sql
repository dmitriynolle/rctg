DELETE FROM shtrafball;

ALTER TABLE shtrafball AUTO_INCREMENT=0;

INSERT INTO `shtrafball` (`id`, `shtrafname`, `shtrafball`, `ball`) VALUES
(1, 'Время этапа', 1, 0),
(2, 'Штрафные минуты', 25, 1),
(3, 'Касание сигнальной ленты', 5, 1),
(4, 'Касание створа ворот', 10, 0),
(5, 'Выезд за пределы трассы', 20, 0),
(6, 'Повреждение трассы', 30, 0),
(7, 'Пропуск ворот', 40, 0),
(8, 'Помощь руками/ногами', 75, 0),
(9, 'Спор с судьей', 200, 0),
(10, 'Сход', 400, 0),
(11, 'Бонусные ворота', -20, 0);

DROP VIEW `namegamesview`;

ALTER TABLE `namegames`
    ADD `ball` INT(20);

CREATE VIEW `namegamesview` AS select
`a`.`id` AS `id`,
`a`.`namegames` AS `namegames`,
`a`.`shtrafid` AS `shtrafid`,
`b`.`shtrafname` AS `shtrafname`,
`a`.`su` AS `shtrafball`,
`a`.`ball` AS ball
from (`namegames` `a` left join `shtrafball` `b` on((`a`.`shtrafid` = `b`.`id`))) where (`a`.`priznak` = 1);
