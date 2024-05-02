
# Chat APP HQ

description

## setup and run instructions.

## API Endpoints

### /api/v1/auth

#### 1. `<b>`[POST] /signup `</b>`

```json

    example: req.body

    {

"fullName":"Namita Jain",

"username": "njain",

"password": "abcd@1234",

"confirmPassword": "abcd@1234",

"gender": "female"

    }

    response

    {


"_id": "663268b835fedb1239c4f7dc",

"fullName": "abcd efgh",

"username": "abcde",

"profilePic": "https://avatar.iran.liara.run/public/boy?username=abcde"

    }


```

#### 2. `<b>`[POST] /login`</b>`

```json

    example: req.body

    {

"username": "abcde",

"password": "abcde@12345",

    }

    response

    {


"_id": "663268b835fedb1239c4f7dc",

"fullName": "abcd efgh",

"username": "abcde",

"profilePic": "https://avatar.iran.liara.run/public/boy?username=abcde"

    }


```

#### 3. `<b>`[POST] /logout

```json

    response

    {

"message": "Logged out successfully"

    }

```

### /api/v1/messages

#### 1. `<b>`[POST] /send/:id

```json


    req.body

    {

"message":"Hello dear XYZ!"

    }

    response

    {

"senderId": "663268b835fedb1239c4f7dc",

"receiverId": "6632693535fedb1239c4f7e2",

"message": "Hello dear XYQ!",

"_id": "66326c0d35fedb1239c4f7f0",

"createdAt": "2024-05-01T16:21:33.572Z",

"updatedAt": "2024-05-01T16:21:33.572Z",

"__v": 0

    }



```

#### 2. `<b>`[GET] /:id

```json


    response

    {

        [

            {

"_id": "66326c0d35fedb1239c4f7f0",

"senderId": "663268b835fedb1239c4f7dc",

"receiverId": "6632693535fedb1239c4f7e2",

"message": "Hello dear XYQ!",

"createdAt": "2024-05-01T16:21:33.572Z",

"updatedAt": "2024-05-01T16:21:33.572Z",

"__v": 0

            }

        ]

    }



```

### /api/v1/users

```json

response{

            [

                {

"_id": "65e38f292508ed44773dc49c",

"fullName": "Namita Jain",

"username": "njain",

"gender": "female",

"profilePic": "https://avatar.iran.liara.run/public/girl?username=njain",

"createdAt": "2024-03-02T20:42:17.165Z",

"updatedAt": "2024-03-02T20:42:17.165Z",

"__v": 0

                },

                {

"_id": "65e38f4f2508ed44773dc4a7",

"fullName": "Anupam Sharma",

"username": "asharma",

"gender": "male",

"profilePic": "https://avatar.iran.liara.run/public/boy?username=asharma",

"createdAt": "2024-03-02T20:42:55.753Z",

"updatedAt": "2024-03-02T20:42:55.753Z",

"__v": 0

                },

            ]

}

```

### /api/v1/users/update-status

```json

    req.body

    {

"status":"busy"

    }

    response

    {

"message":"Status Changed"

    }

```

## .env

```bash

MONGO_DB_URI=mongodb+srv://dg24:dgarg24@cluster0.r7c0930.mongodb.net/ChatOrbit?retryWrites=true&w=majority

JWT_SECRET=u88ND7h4/ziuoZWrlrID3rKRBo7T8pjO/nTSXYnSkLw=

NODE_ENV=development

PORT=8000

```
