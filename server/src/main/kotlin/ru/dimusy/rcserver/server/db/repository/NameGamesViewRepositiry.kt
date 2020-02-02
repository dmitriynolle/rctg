package ru.dimusy.rcserver.server.db.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import ru.dimusy.rcserver.server.db.entity.namegamesview

@Repository
interface NameGamesViewRepositiry: CrudRepository<namegamesview, Long> {

    @Query("select t from namegamesview t where t.namegames = :namegame")
    fun selectGame(@Param("namegame") namegame: String): List<namegamesview>
}
