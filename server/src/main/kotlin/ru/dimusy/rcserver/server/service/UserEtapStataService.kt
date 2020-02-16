package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.useretapstata
import ru.dimusy.rcserver.server.db.repository.UserEtapStataRepository

@Service
class UserEtapStataService(val userEtapStataRepository: UserEtapStataRepository) {

    fun selectStata(nomeretap: Int, nomeruser: Int): List<useretapstata> {
        return userEtapStataRepository.selectStata(nomeretap, nomeruser)
    }

    fun saveAll(userEtapStata: List<useretapstata>): Iterable<useretapstata> {
        return userEtapStataRepository.saveAll(userEtapStata)
    }
}
