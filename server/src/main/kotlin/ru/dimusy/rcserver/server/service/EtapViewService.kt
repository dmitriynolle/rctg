package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.etapview
import ru.dimusy.rcserver.server.db.repository.EtapViewRepository

@Service
class EtapViewService (val etapViewRepository: EtapViewRepository) {

    fun selectUser(gameid: Int, userid: Int): List<etapview> {
        return etapViewRepository.selectUser(gameid, userid)
    }

    fun selectUsers(gameid: Int): List<etapview> {
        return etapViewRepository.selectUsers(gameid)
    }
}
