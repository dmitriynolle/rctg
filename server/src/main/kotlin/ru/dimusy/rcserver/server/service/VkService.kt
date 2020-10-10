package ru.dimusy.rcserver.server.service

import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import ru.dimusy.rcserver.server.config.VK_WEB_CLIENT

@Service
class VkService (@Qualifier(VK_WEB_CLIENT) private val vkWebClient: WebClient) {
    fun getAll(): Mono<Any> {
//        return vkWebClient.get().uri("photos.get?v=5.52&owner_id=-107400019&album_id=wall&rev=1&count=1000&access_token=ab779434ab779434ab779434a3ab072bacaab77ab779434f5f0a74efc39a1d44e954bef")
//                .retrieve().bodyToMono(Any::class.java)
        return vkWebClient.get().uri("wall.get?v=5.84&owner_id=-107400019&count=50&filter=owner&access_token=ab779434ab779434ab779434a3ab072bacaab77ab779434f5f0a74efc39a1d44e954bef")
                .retrieve().bodyToMono(Any::class.java)
    }
}