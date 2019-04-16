# **insomnia-plugin-authtoken**

If you are sick of expired authentication tokens when runing multiple requests in insomnia then try to use this plugin.
Now, the parameters you are using to get _your_ application token might be different, 
but you can implement it using this sample as an example.
This plugin fetches auth token based on values configured in insomnia environment variables 
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
 
 ### To install plugin manually
 1) Checkout this repository;
 2) Copy source code to insomnia plugins directory:
 
 - ___MacOS_:__ ~/Library/Application\ Support/Insomnia/plugins/
 
 - _**Windows**_: %APPDATA%\Insomnia\plugins\
 
 - _**Linux**_: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
 
 
 ### Todos
  - Write Tests
  - Publish plugin to [npm](https://www.npmjs.com/)
 