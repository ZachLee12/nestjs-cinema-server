import { Controller, Get, Param } from '@nestjs/common';
import { HallService } from '../service/hall.service';

@Controller('hall')
export class HallController {
    constructor(
        private hallService: HallService
    ) { }

    //hall
    @Get(':hallId')
    async getOneHall(@Param('hallId') hallId: string) {
        return await this.hallService.findOneHall(hallId);
    }

    @Get(':movieId/:showtime')
    async getAllHalls(@Param('movieId') movieId: string, @Param('showtime') showtime: string) {
        return await this.hallService.findHalls(movieId, showtime)
    }
}
