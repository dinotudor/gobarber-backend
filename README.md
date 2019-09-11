# Go Barber backend

## Backend for practice. Part of the Rocketseat Bootcamp 2019

User can create a profile as user or provider. As user, can see a provider

#### Routes:

- USERS:

  - POST: `'/users'` Create user - using field validation with Yup. Fields: name(String, unique and required), password (min 6 characters,required)
  - PUT: `'/users'` Edit users fields as name, email, password.

- SESSIONS:

  - POST: `'/sessions'` Create session, validation using JWT (Json Web Token), field validation, email and password required. Password encryptation using Bcrypt

- FILES:

  - POST: `'/files'` Upload file for users avatar.

- PROVIDERS:
  - GET: `'/providers'` list all providers. Index method
  - GET: `'/providers/:providerId/avaiable'` List open spots on a providers agenda to be scheduled.
