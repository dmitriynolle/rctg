package ru.dimusy.rcserver.server.db.entity

import javax.persistence.*

@Entity
class etap (
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long,
        val gameid: Int,
        val nomeruser: Int,
        val userid: Int,
        val factoruser: Int,
        val su1: Int,
        val su2: Int,
        val su3: Int,
        val su4: Int,
        val su5: Int,
        val timeuser: Int,
        val summa: Int
)
