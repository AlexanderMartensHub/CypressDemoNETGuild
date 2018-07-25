import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { BASE_URL } from './shared/baseurl';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { baseUrl } from '../environments/environment';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { EventBusService } from './event-bus.service';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { ConfirmDeactivationDialogComponent } from './confirm-deactivation-dialog/confirm-deactivation-dialog.component';
import { CanDeactivateContactsEditorGuard } from './contacts-editor.guard';
import { ContactsResolver } from './shared/contacts.resolver';


@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabComponent,
    TabsComponent,
    ContactsDashboardComponent,
    ConfirmDeactivationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES), // Add: , { enableTracing: true } as param in forRoot for debugging
    HttpClientModule,
  ],
  providers: [
    ContactsService,
    EventBusService,
    { provide: BASE_URL, useValue: baseUrl },
    // { provide: 'ConfirmNavigationGuard', useValue: doConfirm },
    CanDeactivateContactsEditorGuard,
    ContactsResolver
  ],
  entryComponents: [ConfirmDeactivationDialogComponent],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}

export function doConfirm(component: ContactsEditorComponent) {
  return !component.routeChangedBySave || window.confirm('Navigate away without saving?');
}
