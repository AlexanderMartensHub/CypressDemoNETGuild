import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailViewComponent } from './contacts-detail-view.component';
import { ContactsMaterialModule } from '../contacts-material.module';
import { ContactsDetailComponent } from '../contacts-detail/contacts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL } from '../shared/baseurl';
import { baseUrl } from '../../environments/environment';

describe('ContactsDetailViewComponent', () => {
  let component: ContactsDetailViewComponent;
  let fixture: ComponentFixture<ContactsDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailViewComponent , ContactsDetailComponent],
      imports: [ContactsMaterialModule, HttpClientModule],
      providers: [
        { provide: BASE_URL, useValue: baseUrl },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
