import { Body, Controller, Get, Post } from '@nestjs/common';

import { ScraperService } from 'src/scraper/scraper.service';
import { GetSymptoms } from 'src/common/dtos/get-symptoms.dto';
import { SymptomList } from 'src/common/interfaces/symptoms.interface';


@Controller('api')
export class ApiController {

    constructor(private scraperService : ScraperService) {}

    @Post('highlight-text-dummy')
    getHighlightedText(@Body() body : GetSymptoms) : SymptomList {

        return {
            text     : body.text,
            symptoms : ['one', 'two', 'three']
        };
    }

    @Post('highlight-text')
    async getHighlightedText2(@Body() body : GetSymptoms) : Promise<SymptomList> {

        let symptoms: string[] = await this.scraperService.getHighlightedWords(body.text);

        return {
            text     : body.text,
            symptoms : symptoms
        };
    }

    @Get('symptom-categories')
    async getSymptomCategories() : Promise<string[]> {

        let symptoms: string[] = await this.scraperService.getSymptomCategories();
        return symptoms;
    }
}
