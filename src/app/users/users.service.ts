import { Observable } from 'rxjs/Observable';
import { TweetModel } from './../shared/tweets/tweets.model';
import { Injectable } from '@angular/core';
import { HttpService } from '@shared/http';

@Injectable()
export class UsersService {

    constructor(private http: HttpService) {
    }

    // seems api does not support with user param
    getTweets(page, wait: number, user?:string): Observable<TweetModel[]> {
        let userValue = user ? user : '';
        let url = `users/Twitter?pages_limit=${page}&wait=${wait}&user=${userValue}`;
        return this.http.get(url);
    }

    filterTweets(tweets: TweetModel[], userFilter: string) {
        return [...tweets.filter(item => item.hashtags.includes(userFilter))];
    }
}
