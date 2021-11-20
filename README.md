## Assignment to create a simple authentication system with id/email password

### User JsonWebtoken for authentication

Routes


### Register Route

```
curl --location --request POST 'http://localhost:5000/register' \
--data-raw '{
    "name" : "shimanshu",
    "email" : "shimanshu83@gmail.com",
    "password" : "AdminShimu1234",
    "confirmPassword" : "AdminShimu1234"

} 

{
  "result": {
    "success": true,
    "result": {
      "name": "shimanshu",
      "email": "shimanshu83@gmail.com",
      "password": "b48db7f50cf632ec26a7572ac28eab882a34e0e4505c7ae538cd400c77c60aad86a2af636a8a53579368bef59226c6bc1dd7f379fdbe6cd9272dad407be90da6",
      "_id": "6194594464c6ee774bf826c6",
      "createdAt": "2021-11-17T01:22:12.422Z",
      "updatedAt": "2021-11-17T01:22:12.422Z",
      "__v": 0
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1OTQ0NjRjNmVlNzc0YmY4MjZjNiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYzNzExMjEzMiwiZXhwIjoxNzM3MTEyMTMyfQ.JUCC0vnH58-YNPuvv7eE4qjmUTUzzqHbp6DSmgYEW20"
}
```

### Login Route 
```
curl --location --request POST 'http://localhost:5000/login' \
--data-raw '{
    "email" : "shimanshu83@gmail.com",
    "password" : "AdminShimu1234"
 
}'

response

{
  "result": {
    "success": true,
    "result": {
      "name": "shimanshu",
      "email": "shimanshu83@gmail.com",
      "password": "b48db7f50cf632ec26a7572ac28eab882a34e0e4505c7ae538cd400c77c60aad86a2af636a8a53579368bef59226c6bc1dd7f379fdbe6cd9272dad407be90da6",
      "_id": "6194594464c6ee774bf826c6",
      "createdAt": "2021-11-17T01:22:12.422Z",
      "updatedAt": "2021-11-17T01:22:12.422Z",
      "__v": 0
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1OTQ0NjRjNmVlNzc0YmY4MjZjNiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYzNzExMjEzMiwiZXhwIjoxNzM3MTEyMTMyfQ.JUCC0vnH58-YNPuvv7eE4qjmUTUzzqHbp6DSmgYEW20"
}

```