package ru.dimusy.rcserver.server.db.entity

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class namegamesview(

        @Id
        val id: Int,
        val namegames: String,
        val shtrafid: Int,
        val shtrafname: String,
        val shtrafball: Int,
        val ball: Int,
        val factor: Boolean
)
