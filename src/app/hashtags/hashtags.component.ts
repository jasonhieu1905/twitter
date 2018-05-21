import { TweetModel } from './../shared/tweets/tweets.model';
import { Constant } from './../shared/constant';
import { Component, HostBinding } from '@angular/core';

import { HashtagsService } from './hashtags.service';

@Component({
    selector: 'app-hashtags',
    providers: [
        HashtagsService
    ],
    templateUrl: './hashtags.component.html'
})
export class HashtagsComponent {

    @HostBinding('class') classList = 'full-height';

    public constructor(
        public hashtagsService: HashtagsService
    ) {
    }
}
