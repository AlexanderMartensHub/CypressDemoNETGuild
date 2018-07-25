import { ContactManager } from './contact-manager';
import { CONTACT_DATA } from './contact-data';

describe('ContactsManager', () => {

  let contactManager: ContactManager;

  beforeEach(() => {
    contactManager = new ContactManager(CONTACT_DATA);
  });

  it('should return all contacts', () => {
    expect(contactManager.getAll()).toEqual(CONTACT_DATA);
  });

  it('should return a contact by id', () => {
    const contactID = 1;
    const expectedContact = CONTACT_DATA[contactID];

    expect(contactManager.get(contactID)).not.toBeNull();
    expect(contactManager.get(contactID)).toEqual(expectedContact);
  });

  xit('should add a contact', () => {
    const contact = {
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
    // createSpy()
    contactManager.add(contact);
    // expect(CONTACT_DATA).toContain(contact);
    expect(contactManager.add).toHaveBeenCalledWith(contact);
    expect(() => {
      contactManager.update(contact);
    }).toThrowError('');
  });

  xit('should update a contact', () => {
    expect(contactManager.getAll()).toEqual(CONTACT_DATA);
  });
});
