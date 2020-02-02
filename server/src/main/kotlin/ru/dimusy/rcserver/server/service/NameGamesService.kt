package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.namegames
import ru.dimusy.rcserver.server.db.repository.NameGamesRepository

@Service
class NameGamesService (val nameGamesRepository: NameGamesRepository){

    fun priznak (priznak: Int): List<namegames> {
        return nameGamesRepository.selectPriznak(priznak)
    }

    fun opis (namegames: String): List<namegames> {
        return nameGamesRepository.selectOpis(namegames)
    }

    fun save(nameGames: namegames): namegames {
        return nameGamesRepository.save(nameGames)
    }

}
