CREATE TABLE IF NOT EXISTS `useretapstata` (
                                               `id` int(11) NOT NULL AUTO_INCREMENT,
                                               `nomeretap` int(10) DEFAULT NULL,
                                               `nameetap` varchar(255) NOT NULL,
                                               `nomersu` int(10) DEFAULT NULL,
                                               `nomeruser` int(10) DEFAULT NULL,
                                               `nameuser` varchar(255) NOT NULL,
                                               `nameshtraf` varchar(255) DEFAULT NULL,
                                               `sum` int(10) NOT NULL,
                                               PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=52 ;