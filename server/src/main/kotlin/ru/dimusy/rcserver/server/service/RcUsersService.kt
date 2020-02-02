package ru.dimusy.rcserver.server.service

import org.springframework.stereotype.Service
import ru.dimusy.rcserver.server.db.entity.namegames
import ru.dimusy.rcserver.server.db.entity.rcusers
import ru.dimusy.rcserver.server.db.repository.RcUserRepository

@Service
class RcUsersService (val rcUserRepository: RcUserRepository){

    fun findall (): MutableIterable<rcusers> {
        return rcUserRepository.findAll()
    }

    fun save(userName: rcusers): rcusers {
        return rcUserRepository.save(userName)
    }
}
