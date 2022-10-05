import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

import { UrlModule } from 'src/url/url.module';

@Module({
  imports: [ UrlModule ],
  controllers: [ SeedController ],
  providers: [ SeedService ]
})
export class SeedModule {}
