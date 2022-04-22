import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { load } from 'cheerio';
import fetch, { ScrapeConfig } from '@web-master/node-web-fetch';

// import { dummyHTML } from '../data/dummy-html';
import { SYMPTOMS_URL, STOP_WORDS } from 'src/constants';


@Injectable()
export class ScraperService {

    async fetch<T>(config: ScrapeConfig): Promise<T> {
        return fetch<T>(config);
    }

    async fetchHtml(url: string): Promise<string> {

        const response = await axios.get(url);
        return response.data;
    }

    removeStopWords(phrase: string[]): string[] {

        let filteredPhrase: string[] = [];

        phrase.forEach(word => {
            if (!STOP_WORDS.includes(word.toLowerCase())) {
                filteredPhrase.push(word.toLowerCase());
            }
        });

        return filteredPhrase;
    }

    removePuncuation(phrase: string): string {
        const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
        return phrase.replace(punctuationRegex, '');
    }

    async getSymptomCategories(): Promise<string[]> {

        let symptoms: any = [];
        const html: string = await this.fetchHtml(SYMPTOMS_URL);
        const $: any = load(html);

        $('a.nhs-uk__az-link').each((_i: number, li: any) => {

            const title: string = this.removePuncuation($(li).text().trim());
            const filteredTitle: string[] = this.removeStopWords(title.split(' '));

            symptoms.push(...filteredTitle);
        })

        symptoms = [...new Set(symptoms)];
        console.log(symptoms);

        return symptoms;
    }

    async getHighlightedWords(userText: string): Promise<string[]> {

        const categories: string[] = await this.getSymptomCategories();
        const lowerUserText = userText.toLowerCase();

        let highlightedWords: string[] = [];
        categories.forEach(category => {
            if (lowerUserText.includes(category.toLowerCase())) {
                highlightedWords.push(category);
            }
        })

        return highlightedWords;
    }
}
