import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AppService } from 'src/app.service';
import { Injector } from '@nestjs/core/injector/injector';
import { Module } from '@nestjs/common';

@Controller()
@Module({
   providers: [AppService],
 })

export class CoffeesController {

     @Get('coffees')
     findAll() {
        return 'this is action';
     }

     @Get('list')
     findlist() {
         return 'this is list';
   }

   @Get('hi')
   getHi() {
       return this.appservice.getHi();
 }
}


