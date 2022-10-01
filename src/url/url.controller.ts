import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiCreatedResponse, ApiBadRequestResponse, ApiBody } from '@nestjs/swagger';

import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './entities/url.entity';

@ApiTags('Url')
@Controller('url')
export class UrlController {

  constructor( private readonly urlService: UrlService ) {}

  @Post()
  @ApiCreatedResponse({ description: 'La Url ha sido creada', type: Url })
  @ApiBadRequestResponse({ description: 'Body de la peticion con datos incorrectos' })
  @ApiResponse({ status: 409, description: 'Hay una Url asi que ya existe' })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  @ApiBody({ description: 'Body de la peticion', type: CreateUrlDto })
  addUrl( @Body() createUrlDto: CreateUrlDto ): Promise<Url>  {
    return this.urlService.create(createUrlDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Urls encontradas', type: [Url] })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  findAllUrl() {
    return this.urlService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Url encontrada', type: Url })
  @ApiResponse({ status: 404, description: 'Url no encontrada' })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  findOneUrl( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.urlService.findOne( id );
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Url eliminada' })
  @ApiResponse({ status: 404, description: 'Url no encontrada' })
  @ApiResponse({ status: 500, description: 'Ocurrio un problema con el servidor' })
  removeUrl( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.urlService.remove( id );
  }
}
