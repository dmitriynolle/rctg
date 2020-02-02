package ru.dimusy.rcserver.server.db.entity

import javax.persistence.*

@Entity
class rcusers (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val usernumber: Int,
    val username: String,
    val factor: Int
)
