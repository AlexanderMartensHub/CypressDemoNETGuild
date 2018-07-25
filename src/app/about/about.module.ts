import { NgModule } from '@angular/core';
import { RouterModule } from 'node_modules/@angular/router';
import { AboutComponent } from './about.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsMaterialModule } from '../contacts-material.module';

@NgModule({
    imports: [
        ContactsMaterialModule,
        RouterModule.forChild([{ path: '', component: AboutComponent }])
    ],
    declarations: [AboutComponent]
})
export class AboutModule { }
