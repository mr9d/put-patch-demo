# PUT/PATCH demo for Yandex Praktikum

## About

Demo application developed at the request of [Yandex Praktikum](https://practicum.com/) students. The goal was to demonstrate the difference between PUT and PATCH methods in RESTful API.

## Running application

If you want to run the application, you can do the following:

- `git clone` the repository
- Run `npm install`
- Start application with `npm run start`

After this, REST API should be available for calls from [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) at <http://localhost:8080>

## How to use

### GET /contacts

Returns a list of all contact.

### GET /contacts/:phone

Returns one contact for provided phone number.

### POST /contacts

Creates a new contact. Expects the following JSON body:

```
{
  "firstName" = "...",
  "lastName": "...",
  "phone": "..."
}
```

### PUT /contacts/:phone

Replaces contact with provided phone number.

The request body is the same as above.

### PATCH /contacts/:phone

Modifies contact with provided phone number.

The request body is the same as above, but all fields are optional.

## Used technologies

- Express 4.17 ([documentation](https://expressjs.com/en/4x/api.html))
- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)
- Read more about [RESTful APIs](https://restfulapi.net/)
