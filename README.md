## Provider Service

This application serves as the backend service for the provider directoy. It performs basic CRUD operations on providers.

There are five operations available for the service. Please see routes for more information on service URL's.

1. GET all providers
2. DELETE single provider
3. DELTE multiple providers
4. POST single provider
5. RESET providers on database

### Instructions

The provider directory runs on a client and backend application.

To run the directory, both the client and this application need to be cloned.

Once both are retrieved, run `npm start` on both.

The port number on the client and backend service should be `3000` and `9000` respectively which is the default. Ensure the backend runs on port `9000`.

Please see instructions on client README as well.

If a RESET on the database is desired, please create the reset request on an HTTP application like POSTMAN. Make sure the backend application is running via `npm start`, your request is of type `POST`, and it points to `localhost:9000/providers/reset`.
