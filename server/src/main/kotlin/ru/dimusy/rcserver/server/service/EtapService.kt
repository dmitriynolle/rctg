package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.etap
import ru.dimusy.rcserver.server.db.repository.EtapRepository

@Service
class EtapService (val etapRepository: EtapRepository) {

    fun save(etap: etap): etap
    {
        return etapRepository.save(etap)
    }

    fun selectGameId (gameid: Int): List<etap> {
        return etapRepository.selectGameId(gameid)
    }

    fun saveAll(etap: List<etap>): Iterable<etap> {
        return etapRepository.saveAll(etap)
    }
}
