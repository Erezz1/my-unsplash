import { Injectable } from '@nestjs/common';

import { data } from './data/data';
import { UrlService } from 'src/url/url.service';

@Injectable()
export class SeedService {

  constructor(
    private urlService: UrlService,
  ) {}

  /**
   * Execucion del seed
   * @returns Mensaje en caso de ejecutarse correctamente
   */
  async executeSeed() {

    await this.deleteDatabase();
    await this.insterUrls();

    return {
      msg: 'Seed executed'
    }
  }

  /**
   * Agrega cada una de las urls nuevas
   */
  async insterUrls() {
    const initialData = data;
    const insertPromises = [];

    initialData.forEach( url => {
      insertPromises.push(
        this.urlService.create( url )
      )
    });

    await Promise.all( insertPromises );
  }

  /**
   * Elimina todo el contenido de la base de datos
   */
  private async deleteDatabase() {
    await this.urlService.deleteAllUrl();
  }
}
