# NexusEdu


###  `GET` `/`

* Responds with status code 200 and object `{"message" : "Success, Thank you for using the Project_Edu API"}`

##  User Accounts
### `POST` `/login`
> Allows customers to login into their already created user account
* Responds with status code 200.

### `POST` `/signup`
> Allows customers to create a user account
* Responds with status code 201.

##  Users
### `GET` `/user/:id`
> Gets all user account information
* Responds with status code 200.

### `PUT` `/user/:id/update`
> Edit updates all or specific parts of a user's account
* Responds with status code 200.

##  Discussion Board
### `GET` `/board`
> Displays all the posts on the discussion board
* Responds with status code 200.

### `POST` `/board/post`
> Creates a post along the board
* Responds with status code 201.

### `PUT` `/board/post/:id`
> Updates parts or the entire post
* Responds with status code 200.


#### Stretch Endpoints

##  Chat
### `POST`
*
### `PUT`
*
### `GET`
*

##  Programs
### `POST` `/program`
> Creates a list item which contains the program information you want to share
* Responds with status code 201.

### `PUT` `/program/:id`
> Updates parts or the entire program item
* Responds with status code 200.

### `GET` `/program`
> Displays all programs
* Responds with status code 201.
