package ru.dimusy.rcserver.server.db.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import ru.dimusy.rcserver.server.db.entity.namegames

@Repository
interface NameGamesRepository: CrudRepository<namegames, Long> {

    @Query("select t from namegames t where t.priznak = :priznak")
    fun selectPriznak(@Param("priznak") priznak: Int): List<namegames>

    @Query("select t from namegames t where t.namegames = :namegames")
    fun selectOpis(@Param("namegames") namegames: String): List<namegames>

}
