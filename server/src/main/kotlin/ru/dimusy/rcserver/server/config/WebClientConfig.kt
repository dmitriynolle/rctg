package ru.dimusy.rcserver.server.config

import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.reactive.function.client.WebClient

const val VK_WEB_CLIENT = "vk_web_client";

@Configuration
@EnableConfigurationProperties(VkProperties::class)
class WebClientConfig {

    @Bean(VK_WEB_CLIENT)
    fun vkWebClient(vkProperties: VkProperties): WebClient {
        return WebClient.builder()
                .baseUrl(vkProperties.url.toString())
                .build()
    }
}