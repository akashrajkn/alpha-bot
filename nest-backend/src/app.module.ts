import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiController } from './api/api.controller';
import { AppService } from './app.service';
import { ScraperService } from './scraper/scraper.service';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, ScraperService],
})
export class AppModule {}
