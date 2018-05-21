import { Constant } from './../constant';
import { Component, Input, OnChanges, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';

import { AppService } from '../../app.service';

import { TweetModel } from '@shared/tweets/tweets.model';

var globalTimeout = null;
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html'
})

export class TweetsComponent {
  @HostBinding('class') classList = 'full-height';

  isLoading

  public itemsPerPage = 10;
  public currentPage = 1;
  public total: number;
  public tweets: TweetModel[] = [];
  public originalTweets: TweetModel[] = [];

  @Input() title: string;
  @Input() placeholder: string;
  @Input() service: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getTweets();
    this.appService.isLoading.subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

  getTweets() {
    this.service.getTweets(Constant.PAGE_LIMIT, Constant.WAIT_TIME).subscribe(res => {
      this.originalTweets = this.tweets = res;
      this.total = this.tweets.length;
    });
  }


  filterHashTags(event) {
    if (globalTimeout != null) {
      clearTimeout(globalTimeout);
    }
    globalTimeout = setTimeout(() => {
      globalTimeout = null;
      let filterValue = event.target.value;
      if(filterValue) {
        this.tweets = this.service.filterTweets(this.originalTweets, filterValue);
        this.total = this.tweets.length;
      } else {
        // if user input empty. Call fetch tweet.
        this.getTweets();
      }
    }, 1000);
  }

}
