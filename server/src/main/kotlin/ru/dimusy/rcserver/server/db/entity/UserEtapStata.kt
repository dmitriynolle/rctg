package ru.dimusy.rcserver.server.db.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class useretapstata(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val Id: Long,
        val nomeretap: Int,
        val nameetap: String,
        val nomersu: Int,
        val nomeruser: Int,
        val nameuser: String,
        val nameshtraf: String,
        val sum: Int
)
