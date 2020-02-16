package ru.dimusy.rcserver.server.db.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import ru.dimusy.rcserver.server.db.entity.useretapstata

@Repository
interface UserEtapStataRepository : CrudRepository<useretapstata, Long> {

    @Query("select t from useretapstata t where t.nomeretap = :nomeretap and t.nomeruser = :nomeruser")
    fun selectStata(@Param("nomeretap") nomeretap: Int, @Param("nomeruser") nomeruser: Int): List<useretapstata>
}
