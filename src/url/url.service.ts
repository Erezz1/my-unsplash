import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Like, Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';

import { CreateUrlDto, FindAllUrlDto } from './dto';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlService {

  constructor(
    @InjectRepository( Url )
    private urlRepository: Repository<Url>,

    private readonly dataSource: DataSource,
  ) {}

  /**
   * Crear una nueva Url
   * @param newUrl Url a crear
   * @returns Url creada
   */
  async create( newUrl: CreateUrlDto ): Promise<Url> {
    try {
      const urlCreated = this.urlRepository.create( newUrl );
      await this.urlRepository.save( urlCreated );

      return urlCreated;

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  /**
   * Encontrar todas las Url mediante busqueda
   * @param findAllUrl Queries para la busqueda
   * @returns Arreglo de Url
   */
  async findAll( findAllUrl: FindAllUrlDto ): Promise<Url[]> {

    const { limit = 10, offset = 0, search = '' } = findAllUrl;

    try {
      let res: Url[];

      if ( isUUID( search ) ) {
        res = await this.urlRepository.find({
          where: { id: search },
        })

      } else if ( search ) {
        res = await this.urlRepository.find({
          where: { label: Like(`%${ search }%`) },
          skip: offset,
          take: limit,
          order: { created: 'DESC' }
        })

      } else {
        res = await this.urlRepository.find({
          skip: offset,
          take: limit,
          order: { created: 'DESC' }
        })
      }

      return res;

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  /**
   * Encontrar una Url por id
   * @param id id de la Url a encontrar
   * @returns Url encontrada
   */
  async findOne( id: string ): Promise<Url> {
    try {
      const urlFound = await this.urlRepository.findOneBy({ id });
      if ( !urlFound )
        throw new NotFoundException();

      return urlFound;

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  /**
   * Eliminar una Url de la base de datos desde su id
   * @param id id de la Url a eliminar
   */
  async remove( id: string ): Promise<void> {
    try {
      await this.findOne( id );
      await this.urlRepository.delete( id );

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  /**
   * Eliminacion de todos los registros en la tabla Url
   */
  async deleteAllUrl(): Promise<void> {
    try {
      const queryBuilder = this.urlRepository.createQueryBuilder();
      await queryBuilder
        .delete()
        .where({})
        .execute();

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  /**
   * Catchear posibles errores y controlarlos
   * @param error any
   */
  private catchErrors( error: any ): void {
    if ( error.code === '23505' )
      throw new BadRequestException('The Url already exist')

    if ( error.status === 404 )
      throw new NotFoundException('Url not found');

    console.log( error.status );
    throw new InternalServerErrorException('Internal server error - Check console logs from server')
  }
}
