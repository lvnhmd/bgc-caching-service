# bgc-caching-service
Caching Service API, developed as part of job application interview process for BGC Partners

###### Requirements:

You should have the following installed locally:

[nodejs](https://nodejs.org/en/)@8.11.3

## Endpoints:

  POST - http://localhost:8080/entry

  GET - http://localhost:8080/entry/Humpty

## Postman collection:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/8b17f9109cfb40f0dfbf)


## To run on dev:

`git clone https://github.com/lvnhmd/bgc-caching-service.git && cd bgc-caching-service && npm i`

`npm start`

*Note*

By default : The server is listening on port **8080**

Should you want to change the above parameters need to add **.env** file in the root directory of the the project with the following content:

>PORT=<port>

## To test:

`npm test`

## TODO

- [ ] Full test coverage
- [ ] Flesh out hashing mechanism
