import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable, Subject } from 'rxjs';
import {
  merge,
  takeUntil,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Contact[]>;
  terms = new Subject<string>();
  // TODO: bekijk hoe je formControl kan binden in de HTML
  // searchTermControl = new FormControl();

  constructor(private contactsService: ContactsService, private eventBus: EventBusService) { }

  ngOnInit() {
    // this.contacts = this.contactsService.search(this.searchTermControl.valueChanges)
    this.contacts = this.contactsService.search(this.terms)
    .pipe(merge(this.contactsService.getContacts().pipe(takeUntil(this.terms))));
    // takeUntil zal er voor zorgen dat de initiële call de search niet zal overschrijven
    this.eventBus.emit('appTitleChange', 'Contacts');
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
