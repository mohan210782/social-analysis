
import { Controller, Query, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { SocialService } from './social.service';
@Controller('social')
export class SocialController {
    constructor(
        private readonly socialService: SocialService
        ) {}

    @Get('/list')
        async createDroplet(): Promise<any> {
        const yy = await this.socialService.doActions();
        //console.log(yy);
        return yy;
     
        
    }
}
