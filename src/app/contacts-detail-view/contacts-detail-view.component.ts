import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBusService } from '../event-bus.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Observable<Contact>;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
    // const contactId = this.route.snapshot.paramMap.get('id');
    // this.contact = this.contactsService.getContact(contactId);
    this.eventBus.emit('appTitleChange', 'Contact Details');
    // In het geval dat je de title wil aanpassen met de contact.name: (je zal dan niet meer werken met een Observable variable)
    // this.contactsService.getContact(contactId).subscribe((contact: Contact) => {
    //   this.contact$ = contact;
    //   this.eventBus.emit('appTitleChange', contact.name);
    // });

    // this.route.params.subscribe(params => {
    //   this.contact = this.contactsService.getContact(params.id);
    // });

    this.contact = this.route.data
      .pipe(map(data => data['contact']));
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }

  navigateToList() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

}
