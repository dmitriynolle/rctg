package ru.dimusy.rcserver.server.controller

import org.springframework.web.bind.annotation.*
import ru.dimusy.rcserver.server.db.entity.*
import ru.dimusy.rcserver.server.service.*

@CrossOrigin
@RestController
class RcControllerer(val nameGamesViewService: NameGamesViewService, val etapViewService: EtapViewService, val etapService: EtapService, val rcUsersService: RcUsersService, val nameGamesService: NameGamesService, val shtrafBallService: StrafBallService, val userEtapStataService: UserEtapStataService) {

    @GetMapping("/users")
    fun findallusers() = rcUsersService.findall()

    @GetMapping("/shtrafball")
    fun findallshtrafball() = shtrafBallService.findall()

    @GetMapping("/namegames")
    fun priznaknamegames(@RequestParam("priznak") priznak: Int): List<namegames> = nameGamesService.priznak(priznak)

    @GetMapping ("/opis")
    fun opis (@RequestParam("namegames") namegames: String): List<namegames> = nameGamesService.opis(namegames)

    @GetMapping ("/gameid")
    fun selectGameId (@RequestParam("gameid") gameid: Int): List<etap> = etapService.selectGameId(gameid)

    @GetMapping("/selectusers")
    fun selectUsersGames(@RequestParam("gameid") gameid: Int): List<etapview> = etapViewService.selectUsers(gameid)

    @GetMapping("/selectuser")
    fun selectUser(@RequestParam("gameid") gameid: Int, @RequestParam("userid") userid: Int): List<etapview> = etapViewService.selectUser(gameid, userid)

    @GetMapping("/selectgame")
    fun selectGame(@RequestParam("gamename") gamename: String): List<namegamesview> = nameGamesViewService.selectGame(gamename)

    @GetMapping("/selectstata")
    fun selectStata(@RequestParam("nomeretap") nomeretap: Int, @RequestParam("nomeruser") nomeruser: Int): List<useretapstata> = userEtapStataService.selectStata(nomeretap, nomeruser)

    @PostMapping("/savenamegames")
    fun savegame(@RequestBody nameGames: List<namegames>) {
        nameGames.forEach { nameGamesService.save(it) }
    }

    @PostMapping("/saveusername")
    fun saveuser(@RequestBody userName: rcusers): rcusers {
        return rcUsersService.save(userName)
    }

    @PostMapping("/saveetap")
    fun saveetap(@RequestBody etap: etap): etap {
        return etapService.save(etap)
    }

    @PostMapping("/saveshtraf")
    fun saveetap(@RequestBody shtrafball: shtrafball): shtrafball {
        return shtrafBallService.save(shtrafball)
    }

    @PostMapping("/savestata")
    fun saveStata(@RequestBody useretapstata: List<useretapstata>): Iterable<useretapstata> {
        return userEtapStataService.saveAll(useretapstata)
//        throw NullPointerException()
    }
}
