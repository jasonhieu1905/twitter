import { TweetModel } from './../shared/tweets/tweets.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpService } from '@shared/http';

@Injectable()
export class HashtagsService {

    constructor(private http: HttpService) {
    }

    // seems api does not support with tag param
    getTweets(page, wait:number, tag?: string): Observable<TweetModel[]> {
        let tagValue = tag ? tag : '';
        let url = `hashtags/Python?pages_limit=${page}&wait=${wait}&tag=${tagValue}`;
        return this.http.get(url);
    }

    filterTweets(tweets: TweetModel[], strFilter: string) {
        return [...tweets.filter(item => item.hashtags.includes(strFilter))];
    }
}
