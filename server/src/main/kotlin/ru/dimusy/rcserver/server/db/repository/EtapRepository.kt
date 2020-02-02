package ru.dimusy.rcserver.server.db.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import ru.dimusy.rcserver.server.db.entity.etap

@Repository
interface EtapRepository: CrudRepository<etap, Long> {

    @Query("select t from etap t where t.gameid = :gameid")
    fun selectGameId(@Param("gameid") gameid: Int): List<etap>
}
