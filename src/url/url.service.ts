import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlService {

  constructor(
    @InjectRepository( Url )
    private urlRepository: Repository<Url>,

    private readonly dataSource: DataSource,
  ) {}

  async create( newUrl: CreateUrlDto ): Promise<Url> {
    try {
      const urlCreated = this.urlRepository.create( newUrl );
      await this.urlRepository.save( urlCreated );

      return urlCreated;

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  async findAll(): Promise<Url[]> {
    try {
      const res = await this.urlRepository.find();
      return res;

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

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

  async remove( id: string ): Promise<void> {
    try {
      await this.findOne( id );
      await this.urlRepository.delete( id );

    } catch ( error ) {
      this.catchErrors( error );
    }
  }

  private catchErrors( error: any ): void {
    if ( error.code === '23505' )
      throw new BadRequestException('The Url already exist')

    if ( error.status === 404 )
      throw new NotFoundException('Url not found');

    console.log( error.status );
    throw new InternalServerErrorException('Internal server error - Check console logs from server')
  }
}
