package ru.dimusy.rcserver.server.db.entity

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class etapview (
        @Id
        val id: Int,
        val gameid: Int,
        val namegames: String,
        val userid: Int,
        val nomeruser: Int,
        val username: String,
        val factoruser: Int,
        val su1: Int,
        val su2: Int,
        val su3: Int,
        val su4: Int,
        val su5: Int,
        val timeuser: Int,
        val summa: Int
)
