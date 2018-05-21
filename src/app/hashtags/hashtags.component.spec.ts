import { HashtagsService } from './hashtags.service';
import { ROUTES } from './../app.routes';
import { AppService } from './../app.service';
import { LayoutsModule } from './../shared/layouts/layouts.module';
import { RouterModule } from '@angular/router';
import { MODULES } from './../app.imports';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { TweetsComponent } from './../shared/tweets/tweets.component';
import { NumberFormatPipe } from './../pipes/number.pipe';
import { TweetDatePipe } from './../pipes/date.pipe';
import { PipeHashtags, ShortenStringPipe } from './../pipes/shorten.pipe';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HashtagsComponent } from './hashtags.component';

describe('HashtagsComponent', () => {
    let component: HashtagsComponent;
    let fixture: ComponentFixture<HashtagsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TweetsComponent,
                ShortenStringPipe,
                NumberFormatPipe,
                TweetDatePipe,
                PipeHashtags,
                HashtagsComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgxPaginationModule,
                MODULES,
                RouterModule.forRoot(ROUTES),
                LayoutsModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                AppService,
                HashtagsService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HashtagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
       
    });

    it(`should have header as 'Angular Twitter'`, () => {
        const fixture = TestBed.createComponent(HashtagsComponent);
        const compiled = fixture.debugElement.nativeElement;
        setTimeout(() => {
            fixture.detectChanges();
            expect(compiled.querySelector('.form__header .form-group').querySelector('label').innerHTML == 'Hashtag Search');
        }, 5000);
        

    });

    it(`should display table with data`, () => {
        const fixture = TestBed.createComponent(HashtagsComponent);
        const compiled = fixture.debugElement.nativeElement;
        setTimeout(() => {
            fixture.detectChanges();
            expect(compiled.querySelector('.form__body .table-grid')).toBeTruthy();
        }, 5000);
        
    });


});
