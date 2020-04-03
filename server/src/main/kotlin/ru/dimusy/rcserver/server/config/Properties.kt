package ru.dimusy.rcserver.server.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component
import java.net.URL

@Component
@ConfigurationProperties("vk")
class VkProperties {
    lateinit var url: URL
}