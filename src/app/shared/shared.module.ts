import { ModuleWithProviders, NgModule } from '@angular/core';

import { HttpModule } from './http';
import { LayoutsModule } from './layouts/layouts.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    exports: [
        HttpModule,
        LayoutsModule,
        NgxPaginationModule
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SharedModule };
    }
}
