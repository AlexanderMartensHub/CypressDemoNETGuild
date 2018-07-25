import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailComponent } from './contacts-detail.component';
import { ContactsMaterialModule } from '../contacts-material.module';
import { By } from '@angular/platform-browser';

describe('ContactsDetailComponent', () => {
  let component: ContactsDetailComponent;
  let fixture: ComponentFixture<ContactsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailComponent ],
      imports: [ContactsMaterialModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a contact from its input', () => {
    const testContact = {
      id: 69,
      name: 'Jenna Jameson',
      email: 'jenna@thoughtram.io',
      phone: '+49 555 6969',
      birthday: '1985-03-18',
      website: 'thoughtram.io',
      image: '/assets/images/0.jpg',
      address: {
        street: 'thoughtram road 1',
        zip: '65222',
        city: 'Los Angeles',
        country: 'USA'
      }
    };

    const expectedContact = {...testContact};
    component.contact = expectedContact;

    fixture.detectChanges();

    const debugE1 = fixture.debugElement.query(
      By.css('mat-card-title')
    );

    fixture.detectChanges();

    expect(debugE1.nativeElement.textContent)
    .toContain(expectedContact.name);
  });
});
