package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.etap
import ru.dimusy.rcserver.server.db.entity.namegames
import ru.dimusy.rcserver.server.db.repository.EtapRepository
import ru.dimusy.rcserver.server.db.repository.NameGamesRepository

@Service
class EtapService (val etapRepository: EtapRepository) {

    fun save(etap: etap): etap
    {
        return etapRepository.save(etap)
    }

    fun selectGameId (gameid: Int): List<etap> {
        return etapRepository.selectGameId(gameid)
    }
}
