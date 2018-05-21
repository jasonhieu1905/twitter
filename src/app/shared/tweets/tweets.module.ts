import { NgxPaginationModule } from 'ngx-pagination';
import { TweetDatePipe } from './../../pipes/date.pipe';
import { PipeHashtags } from './../../pipes/shorten.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { TweetsComponent } from './tweets.component';

// Pipes
import { ShortenStringPipe } from '../../pipes/shorten.pipe';
import { NumberFormatPipe } from '../../pipes/number.pipe';

@NgModule({
    declarations: [
        TweetsComponent,
        ShortenStringPipe,
        NumberFormatPipe,
        TweetDatePipe,
        PipeHashtags
    ],
    exports: [TweetsComponent],
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]

})
export class TweetsModule { }
