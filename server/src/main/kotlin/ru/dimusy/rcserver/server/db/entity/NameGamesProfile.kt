package ru.dimusy.rcserver.server.db.entity

import javax.persistence.*

@Entity
class namegames (
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long,
        val namegames: String,
        val priznak: Int,
        val shtrafid: Int,
        val su: Int
)
