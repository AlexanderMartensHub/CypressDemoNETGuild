import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { AboutComponent } from './about/about.component';
import { CanDeactivateContactsEditorGuard } from './contacts-editor.guard';
import { ContactsResolver } from './shared/contacts.resolver';

export const APP_ROUTES = [
    {
        path: '',
        component: ContactsDashboardComponent,
        children: [
            { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
            { path: 'contact/:id', component: ContactsDetailViewComponent, resolve: { contact: ContactsResolver } },
            {
                path: 'contact/:id/edit',
                component: ContactsEditorComponent,
                canDeactivate: [CanDeactivateContactsEditorGuard],
                resolve: { contact: ContactsResolver } }
        ]
    },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
];
