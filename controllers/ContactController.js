export class ContactController {
  constructor() {
    this.contactsMap = {};
  }

  getAll = () => {
    return Object.values(this.contactsMap);
  }

  add = contact => {
    this.contactsMap[contact.phone] = contact;
    return contact;
  }

  get = phone => {
    return this.contactsMap[phone];
  }

  replace = (phone, contact) => {
    if(!this.contactsMap[phone]) {
      return null;
    }
    delete this.contactsMap[phone];
    return this.add(contact);
  }

  update = (phone, contact) => {
    const updContact = this.contactsMap[phone];
    if(!updContact) {
      return null;
    }
    if(contact.firstName) {
      updContact.firstName = contact.firstName;
    }
    if(contact.lastName) {
      updContact.lastName = contact.lastName;
    }
    if(contact.phone && contact.phone !== phone) {
      delete this.contactsMap[phone];
      updContact.phone = contact.phone;
      this.add(updContact);
    }
    return updContact;
  }

}

export const contactController = new ContactController();
