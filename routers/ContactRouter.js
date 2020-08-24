import { contactController } from '../controllers/ContactController.js';
import { Contact } from '../model/contact.js';

import express from 'express';

export class ContactRouter extends express.Router {
  constructor() {
    super();
    this.get('/contacts', this.getAll);
    this.get('/contacts/:phone', this.getByPhone);
    this.post('/contacts', this.add);
    this.put('/contacts/:phone', this.replace);
    this.patch('/contacts/:phone', this.update);
  }

  getAll = (req, res) => {
    res.send(contactController.getAll());
  }

  add = (req, res) => {
    let contact = new Contact(req.body.firstName, req.body.lastName, req.body.phone);
    contact = contactController.add(contact);
    res.status(201).send(contact);
  }

  getByPhone = (req, res) => {
    const contact = contactController.get(req.params.phone);
    if(!contact) {
      res.sendStatus(404);
    } else {
      res.send(contact);
    }
  }

  replace = (req, res) => {
    const phone = req.params.phone;
    let contact = new Contact(req.body.firstName, req.body.lastName, req.body.phone);
    contact = contactController.replace(phone, contact);
    if(!contact) {
      res.sendStatus(404);
    } else {
      res.send(contact);
    }
  }

  update = (req, res) => {
    const phone = req.params.phone;
    let contact = new Contact(req.body.firstName, req.body.lastName, req.body.phone);
    contact = contactController.update(phone, contact);
    res.send(contact);
  }
}

export const contactRouter = new ContactRouter();
