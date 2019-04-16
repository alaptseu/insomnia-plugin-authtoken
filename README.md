# **insomnia-plugin-authtoken**

Fetches auth token based on parameters passed in environment variables 
and adds it to the request header in the format of `Authorization: bearer <FETCHED AUTH TOKEN>`.
Compulsory environment variables used by this insomnia plugin are:

```
{
   "url": "",
   "client_id": "",
   "client_secret": "",
   "password": "",
   "username": ""
 }
 ```
 
 ###To install plugin manually
 1) Checkout this repository;
 2) Copy source code to insomnia plugins directory:
 
 - ___MacOS_:__ ~/Library/Application\ Support/Insomnia/plugins/
 
 - _**Windows**_: %APPDATA%\Insomnia\plugins\
 
 - _**Linux**_: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
 
 
 ### Todos
  - Write Tests
  - Publish plugin to [npm](https://www.npmjs.com/)
 