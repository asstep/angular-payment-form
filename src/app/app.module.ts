import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

import {AppComponent} from './app.component';
import {CardFormComponent} from './card-form/card-form.component';
import {MainComponent} from './main/main.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        AppComponent,
        CardFormComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
