import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})
export class TweetDatePipe extends DatePipe {
    transform(value: string, format?: string, timezone?: string, locale?: string): string {
        if (value) {
            return super.transform(value.split('-')[1].trim());
        }
        return '';
    }
}