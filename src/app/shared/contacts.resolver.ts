import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {

    constructor(private contactsService: ContactsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.contactsService.getContact(route.paramMap.get('id'));
    }
}
