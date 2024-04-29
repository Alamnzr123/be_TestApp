**You App**
----
**Endpoints**

List of Available Endpoints:

-POST /register
-POST /login
-POST /createProfile
-GET /getProfile
-PUT /updateProfile



**Register**
----
  Registering a user.

***URL**

  http://localhost:3000/api/register

***Method:**

  `POST`
  
***URL Params**

   **Required:**
 
   `None`

***Data Params**

  `email: string`
  `password: string`
  `username: string`
  `password2: string`

***Success Response:**

  ***Code:** 201 <br />
    **Content:** `success register with id: id`
  
  ***Code:** 400 <br />
    **Content:** `{ validation error }`

  ***Code:** 401 <br />
    **Content:** `{ Invalid email/password }`


**Login**
----
  Login a user.

***URL**

  http://localhost:3000/api/login

***Method:**

  `POST`
  
***URL Params**

   **Required:**
 
   `None`

***Data Params**

  `usernameEmail: string`
  `password: string`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ access_token }`

  ***Code:** 401 <br />
    **Content:** `{ Invalid email/password }`


**Create Profile**
----
  create a profile.

***URL**

  http://localhost:3000/api/createProfile

***Method:**

  `POST`
  
***URL Params**

   **Required:**
 
   `Headers: access_token`

***Data Params**

  `displayName:string`
  `gender:string`
  `birthday:date`
  `height:integer`
  `weight:integer`

***Success Response:**

  ***Code:** 201 <br />
    **Content:** `success creating profile with id: id`

  ***Code:** 400 <br />
    **Content:** `{ validation error }`

  ***Code:** 403 <br />
    **Content:** `{ unauthorized }`


**Read Profiles**
----
  Fetch all profiles data.

***URL**

  http://localhost:3000/api/getProfile

***Method:**

  `GET`
  
***URL Params**

   **Required:**
 
   `Headers: access_token`

***Data Params**

  `None`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ profiles data }`
  
  ***Code:** 403 <br />
    **Content:** `{ unauthorized }`


**Edit Profile**
----
  Edit a profile by userId.

***URL**

  http://localhost:3000/api/updateProfile

***Method:**

  `PUT`
  
***URL Params**

   **Required:**
 
   `Headers: access_token`

***Data Params**

  `displayName:string`
  `gender:string`
  `birthday:date`
  `height:integer`
  `weight:integer`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `success updating profile`

  ***Code:** 400 <br />
    **Content:** `{ validation error }`

  ***Code:** 404 <br />
    **Content:** `{ NOTFOUND }`

  ***Code:** 403 <br />
    **Content:** `{ unauthorized }`
