package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.etap
import ru.dimusy.rcserver.server.db.entity.shtrafball
import ru.dimusy.rcserver.server.db.repository.ShtrafBallRepository

@Service
class StrafBallService(val shtrafBallRepository: ShtrafBallRepository) {

    fun findall(): MutableIterable<shtrafball> {
        return shtrafBallRepository.findAll()
    }

    fun save(shtrafball: shtrafball): shtrafball
    {
        return shtrafBallRepository.save(shtrafball)
    }
}
