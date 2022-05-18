# NexusEdu


###  `GET` `/`

* Responds with status code 200 and object `{"message" : "Success, Thank you for using the Project_Edu API"}`

##  User Accounts
### `GET` `/login`
> Allows customers to login into their already created user account

The params will not take anything in

>The body will take in: 
{
    "username": "-----",
    "password": "------" 
}

* Responds: 
 -> if incorrerct or no user has that user name than you will get an error message: user not found, is that the correct username? 

 -> if succsful you will get back that user info as an array. 



### `POST` `/signup`
> Allows customers to create a user account

>The body will need to take in :
    {
    "username" : "eli12", -> required
    "password" : "example", -> required
    "first_name" : "eli", -> required
    "last_name" : "e",  -> required
    "age" : 22,  
    "image" : "example", 
    "email" : "eli.mail.com", -> required
    "bio" : "testing"
    "birthday" : "11/11/1111/" 
    }

    everything that is required must be included or post will not work.


* Responds
if sucssful you will get the newly created user data in an array and a status code 201.

if not sucssful you will get a message as to why that is with a 500 status code. 



##  Users
### `GET` `/users`
> Gets all user account information
> What is needed: 
  nothing needed in the body or params 
* Respond: an array of all users.

### `PUT` `updateUserInfo/:id`
> Edit updates all or specific parts of a user's account

> this will require the users id in the params 
> in the body you can place anything that needs to get updated. must be passed like this in terms of spelling : 
{ 
email,
first_name, 
last_name, 
age, -> must be a number
birthday, -> this must be in date format to be succesful  ("11/11/1111/")
image, 
bio,
password
}

* Respond: update userinfo in the form of an array 

### `DELETE` `user/:id`
> Will delete user profile

will need the user id in the params to find the user. 

* Response: 200 status code


##  Discussion Board
### `GET` `/board`
> Displays all the posts on the discussion board
Nothing requried 
* Responds with status code 200 and array of all post order by desc of id.

### `POST` `/board/post`
This will only require data in the body:  
{
    "user_id" : "3", -> user id 
    "message" : "hello world",  -> the message
    "hashtag" : "#hello" -> the #hashtags
}

> Creates a post along the board
* Responds with status code 201 and the post that was created as an array. 

<!-- ### `PUT` `/board/post/:id`
> Updates parts or the entire post -> not gonna be implamented 
* Responds with status code 200. -->

### `DELETE` `/board/post/:id`
This is only requires the id of the post in the params
> Deletes the post
* Responds with status code 200.



## Comments Page
### `GET` `/:id`
> Display all comments assoicated with post
This will require that the post id be included inside of the params
* Repsonse : you will get back an array of all comments that are associted to the given post. 

### `POST` `/makeComment`
> Post a new comment to that given post

This will require that you send: {
    {
    "user_id" : 1, 
    "post_id" : 1, 
    "comment" : "#hello"
    }
}
in the body. This data is a must inorder to create a comment 

* Response: the comment you just created. 

### `DELETE` `/delete/:id`
> Delete a comment 

This will require that you pass the comments id in the params.

* Response: 204 status code.   

#### Stretch Endpoints

##  Chat
### `POST`
*
### `PUT`
*
### `GET`
*

##  Programs
### `GET` `/program`
> Displays all programs
* Responds with status code 201.
### `POST` `/program`
> Creates a list item which contains the program information you want to share
* Responds with status code 201.

### `PUT` `/program/:id`
> Updates parts or the entire program item
* Responds with status code 200.

### `DELETE` `/program/:id`
> Deletes a program
* Responds with status code 200.