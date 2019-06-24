# SMS-API

The API functionalities of SMS-API

## Technologies Used
- Node.js/ExpressJS (Server Side)
- PostgreSQL DB

## Prerequisites
The following should be installed in your machine
- Node v10.13.0
- PostgreSQL v9+

## How To Install And Run The Application
* Clone this Repo and `cd` into it
* Install all the dependancies by running the `yarn install`
* Ensure to setup  `PostgreSQL on your local machine`
* Create a `.env` file and request for values from ADMIN
* Substitute all these values `DB_USERNAME_DEV`, `DB_PASSWORD_DEV`, `DB_NAME_DEV`, and `DB_HOST_DEV`, with the values used to setup PostgreSQL on your local machine
* Run `yarn dev:migration` to setup the database tables.
* Start the application on development mode by running `yarn dev`

## To Run migration to database on development environments
* Run `yarn dev:migration` for development environment

## To undo migration to database on development environments
* Run `yarn dev:undo:migration` for development environment

## API FEATURES ##

- Users can create a contact
- Users can fetch all contacts
- Users can get a contact
- Users can delete a contact
- Users can create a sms
- Users can get all sms associated with a contact
- Users can get a sms
- Users can delete a sms


## API ENDPOINTS ##
<table>
    <tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th><th>QUERY</th></tr>
    <tr><td>GET</td><td>/api/v1/contacts</td><td>Gets list of contacts</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/contacts/:id</td><td>Gets a contact</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/contacts</td><td>Create a Contact</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/contacts/:id/messages</td><td>List of sent and received messages</td><td></td></tr>
    <tr><td>DELETE</td><td>/api/v1/contacts/:id</td><td>Delete a Contact</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/sms</td><td>Retrieve's an sms</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/sms-messages</td><td>Retrieve's a list of all sms messages</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/sms</td><td>Send an sms</td><td></td></tr>
    <tr><td>DELETE</td><td>/api/v1/sms/:id</td><td>Delete an Sms</td><td></td></tr>
</table>

## API DOCUMENTATION ##
### POST A CONTACT (/api/v1/contacts)

Fields - name, phoneNumber

#### Request

```
{
  "name": "Daramola",
  "phoneNumber": "07011031609",
}
```

#### Response

```
{
    "success": true,
    "message": "Contact has been created successfully",
    "payload": {
        "id": 13,
        "phoneNumber": "07011031609",
        "name": "Daramola Ajiboye",
        "updatedAt": "2019-06-18T19:26:38.888Z",
        "createdAt": "2019-06-18T19:26:38.888Z"
    }
}
```

### GET ALL CONTACTS (/api/v1/contacts)
#### Response
```
{
    "success": true,
    "message": "Contacts has been fetched successfully",
    "payload": [
        {
            "id": 3,
            "name": "Damilola Ajiboye",
            "phoneNumber": "07011021609",
            "createdAt": "2019-06-18T15:00:03.828Z",
            "updatedAt": "2019-06-18T15:00:03.828Z"
        },
        {
            "id": 4,
            "name": "Damilole Ajiboye",
            "phoneNumber": "07011041609",
            "createdAt": "2019-06-18T15:07:26.833Z",
            "updatedAt": "2019-06-18T15:07:26.833Z"
        },
        {
            "id": 6,
            "name": "Damilolas Ajiboye",
            "phoneNumber": "07011051609",
            "createdAt": "2019-06-18T15:42:52.644Z",
            "updatedAt": "2019-06-18T15:42:52.644Z"
        },
        {
            "id": 13,
            "name": "Daramola Ajiboye",
            "phoneNumber": "07011031609",
            "createdAt": "2019-06-18T19:26:38.888Z",
            "updatedAt": "2019-06-18T19:26:38.888Z"
        }
    ]
}
```

### GET A SINGLE CONTACT (/api/v1/contacts/:id)

- where id = 3

#### Response

```
{
    "success": true,
    "message": "Contact has been found successfully",
    "payload": {
        "id": 3,
        "name": "Damilola Ajiboye",
        "phoneNumber": "07011021609",
        "createdAt": "2019-06-18T15:00:03.828Z",
        "updatedAt": "2019-06-18T15:00:03.828Z"
    }
}
```

### DELETE A CONTACT (/api/v1/contacts/:id)

- where contactId = 3

#### Response

```
{
    "success": true,
    "message": "Contact has been deleted successfully",
    "payload": {}
}
```

### POST A MESSAGE (/api/v1/sms)

Fields - senderId, receiverPhoneNumber, message, status (optional)

#### Request

```
{
	"senderId": 13,
	"receiverPhoneNumber": "07011041609",
	"message": "Hello World"
}
```

#### Response

```
{
    "success": true,
    "message": "Sms has been created successfully",
    "payload": {
        "status": "SENT",
        "id": 4,
        "message": "Hello World",
        "senderContactId": 13,
        "receiverContactId": 4,
        "updatedAt": "2019-06-18T19:33:04.052Z",
        "createdAt": "2019-06-18T19:33:04.052Z"
    }
}
```

### GET ALL MESSAGES (/api/v1/sms-messages)

#### Response

```
{
    "success": true,
    "message": "Sms Messages has been fetched successfully",
    "payload": [
        {
            "id": 4,
            "message": "Hello World",
            "status": "SENT",
            "createdAt": "2019-06-18T19:33:04.052Z",
            "updatedAt": "2019-06-18T19:33:04.052Z",
            "senderContactId": 13,
            "receiverContactId": 4
        }
    ]
}
```

### GET MESSAGES BY CONTACT (/api/v1/contacts/:id/messages)

- where id = 13

#### Response

```
{
    "success": true,
    "message": "Contact messages has been found successfully",
    "payload": {
        "id": 13,
        "name": "Daramola Ajiboye",
        "phoneNumber": "07011031609",
        "createdAt": "2019-06-18T19:26:38.888Z",
        "updatedAt": "2019-06-18T19:26:38.888Z",
        "sentSms": [
            {
                "id": 4,
                "message": "Hello World",
                "status": "SENT",
                "createdAt": "2019-06-18T19:33:04.052Z",
                "updatedAt": "2019-06-18T19:33:04.052Z",
                "senderContactId": 13,
                "receiverContactId": 4
            }
        ],
        "receivedSms": []
    }
}
```

### DELETE A MESSAGE (/api/v1/sms/:id)

- where id = 4

#### Response

```
{
    "success": true,
    "message": "Sms has been deleted successfully",
    "payload": {}
}
```

