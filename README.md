## Introduction
Pastebin is a web application that allows users to upload and share text online.
This is a simple RESTful API implementation of Pastebin.

#### How to use the app

```bash

# Clone this repository
$ git clone https://github.com/privatesaint/pastebin-clone.git

# Navigate into the cloned repository
$ cd pastebin-clone

# Install dependencies
$ npm install

# create a copy of env
$ cp .env.example .env

#Provide all the required variables

# Run the app
$ npm start
```

#### How to test

```bash
# Run test
$ npm run test
```

## API endpoints

**Base_URL**-> localhost:4500/api

- Store contents in bin:

```
{
  path: '/pastebin',
  method: POST,
  body: {
    content: <string>|required,
    expiredAt: <string>|nullable,
  }
}
```

- Get contents in bin:

```
{
  path: '/pastebin/werdisd',
  method: GET
}
```
