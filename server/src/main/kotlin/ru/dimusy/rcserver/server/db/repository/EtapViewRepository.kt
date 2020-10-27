package ru.dimusy.rcserver.server.db.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import ru.dimusy.rcserver.server.db.entity.etapview

@Repository
interface EtapViewRepository: CrudRepository<etapview, Long> {

    @Query("select t from etapview t where t.gameid = :gameid and t.userid = :userid")
    fun selectUser(@Param("gameid") gameid: Int, @Param("userid")  userid: Int): List<etapview>

    @Query("select t from etapview t where t.gameid = :gameid and t.factoruser = :category")
    fun selectUsers(@Param("gameid") gameid: Int, @Param("category") category: Int): List<etapview>

    fun findByGameid(gameid: Int): List<etapview>
}
