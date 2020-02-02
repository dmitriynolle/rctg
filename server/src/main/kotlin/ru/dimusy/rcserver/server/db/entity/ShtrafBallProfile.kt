package ru.dimusy.rcserver.server.db.entity

import javax.persistence.*

@Entity
class shtrafball (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val shtrafname: String,
    val shtrafball: Int,
    val ball: Int
    )
