package ru.dimusy.rcserver.server.db.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import ru.dimusy.rcserver.server.db.entity.rcusers

@Repository
interface RcUserRepository: CrudRepository<rcusers, Long> {
}
