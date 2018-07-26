import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { MatDialog } from '@angular/material';
import { ConfirmDeactivationDialogComponent } from './confirm-deactivation-dialog/confirm-deactivation-dialog.component';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CanDeactivateContactsEditorGuard implements CanActivate, CanDeactivate<ContactsEditorComponent> {

    constructor(private dialog: MatDialog) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return false;
    }

    canDeactivate(
        component: ContactsEditorComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) 
    {
        if(component.routeChangedBySave) {
            return of(true);
        }
        const ref = this.dialog.open(ConfirmDeactivationDialogComponent);
        return ref.afterClosed();
    }

}
