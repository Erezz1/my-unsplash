import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe } from '@nestjs/common';

import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('url')
export class UrlController {

  constructor( private readonly urlService: UrlService ) {}

  @Post()
  addUrl( @Body() createUrlDto: CreateUrlDto ) {
    return this.urlService.create(createUrlDto);
  }

  @Get()
  findAllUrl() {
    return this.urlService.findAll();
  }

  @Get(':id')
  findOneUrl( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.urlService.findOne( id );
  }

  @Delete(':id')
  removeUrl( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.urlService.remove( id );
  }
}
