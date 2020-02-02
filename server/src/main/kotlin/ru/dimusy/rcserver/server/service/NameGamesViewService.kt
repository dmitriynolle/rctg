package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.namegamesview
import ru.dimusy.rcserver.server.db.repository.NameGamesViewRepositiry

@Service
class NameGamesViewService( val nameGamesViewRepositiry: NameGamesViewRepositiry) {

    fun selectGame(namegame: String): List<namegamesview> {
        return nameGamesViewRepositiry.selectGame(namegame)
    }
}
