import { Injectable, Inject } from '@angular/core';
import { Contact } from './models/contact';
import { HttpClient } from '@angular/common/http';
import {
  map,
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from 'rxjs/operators';
import { BASE_URL } from './shared/baseurl';
import { ContactsResponse } from './models/contacts-response';
import { ContactResponse } from './models/contact-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }

  getContacts() {
    return this.http.get<ContactsResponse>(`${this.baseUrl}/api/contacts`)
      .pipe(map((data: ContactsResponse) => data.items));
  }

  getContact(id: string) {
    return this.http.get<ContactResponse>(`${this.baseUrl}/api/contacts/${id}`)
      .pipe(map((data: ContactResponse) => data.item));
  }

  updateContact(contact: Contact) {
    return this.http.put<ContactResponse>(`${this.baseUrl}/api/contacts/${contact.id}`, contact)
      .pipe(map(data => data.item));
  }

  rawSearch(term: string): Observable<Contact[]> {
    return this.http.get<ContactsResponse>(`${this.baseUrl}/api/search?text=${term}`)
      .pipe(map((data: ContactsResponse) => data.items));
  }

  search(terms: Observable<string>, debounceMs = 400): Observable<Contact[]> {
    return terms.pipe(
      debounceTime(debounceMs),
      // startWith(''), // alternatieve oplossing voor takeUntil()
      distinctUntilChanged(),
      switchMap(value => this.rawSearch(value)));
  }
}

