import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Observable<Contact>;
  routeChangedBySave = false;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContact(contactId);
    this.eventBus.emit('appTitleChange', 'Edit Contact');
  }

  save(contact: Contact) {
    this.routeChangedBySave = true;
    // Altijd subscriben op een Observable! Anders gaat er niets gebeuren
    this.contactsService.updateContact(contact).subscribe(() => {
      this.goToDetails();
    });
  }

  cancel() {
    this.routeChangedBySave = false;
    this.goToDetails();
  }

  private goToDetails() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

}
