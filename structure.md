# Groove Catcher VR -- High Score Platform

# Front End Components

## Landing Page Template
> NavBar
> Login | Landing & Logout

## <NavBar\>
>- (Login | Logout)
>- (Register | __ )
>- **Landing** >> (About | Home) || Featured
>- About

## <Login\>
>- LoginForm
>>- 'UserName' <- Input
>>- 'Password' <- Input
>>- 'Submit'   <- Button

## Register Page Template
>- 'UserName'   <- Input
>- 'PassWord'   <- Password Input
>- 'ConfirmPass'<- Password Input
>- 'Email'      <- Email

## Create Tournament
>- 'Name of Tournament' <- Input
>- Set Max High Score   <- Input
>- Set Min High Score   <- Input
>- Tournament Text      <- Input Textfield (md?)
>- Tournament Text Preview <- <div\>Realtime<div\>

# Back End Components

## Server
>- Express
>>- Cors
>>- Serves DB results to frontend
>- Database
>>- GraphQL
>>- Schema
>>- Mongo/Mongoose 

## Environment Variables
**HIDDEN**
>- .env (added to git/dockerignore)
>- MongoDB URL w/ credentials

## Models
### Table - Accounts
>- 'Username' <- String
>- 'Password' <- Hashed String
>- 'Email'    <- String

### Table - Tournament(N)
*New Table for every new tournament*
>- 'Name of Tournament'   <- String
>- Set Max High Score     <- Int || Float
>- Set Min High Score     <- Int || Float
>- Tournament Text        <- (*.md) || String