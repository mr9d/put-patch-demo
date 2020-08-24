import express from 'express';

export class HelloRouter extends express.Router {
  constructor() {
    super();
    this.get('/', this.hello);
  }

  hello = (req, res) => {
    res.send({hello: 'world'});
  }
}

export const helloRouter = new HelloRouter();
