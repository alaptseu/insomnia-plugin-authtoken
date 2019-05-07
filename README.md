# **insomnia-plugin-authtoken**

If you are sick of expired authentication tokens when running multiple requests in insomnia then try to use this plugin.

_Another approach to solve this task is using [insomnia chaining requests](https://support.insomnia.rest/article/43-chaining-requests).
However in that case you will need to configure tag with auth response data for every request you are running._ 

Now, the parameters you are using to get _your_ application token might be different, 
but you can implement it using this sample as an example.
This plugin fetches auth token based on values configured in **insomnia environment variables** 
and adds it to the request header in the format of `Authorization: bearer <FETCHED AUTH TOKEN>`.
If your insomnia request already has Authorization header plugin **WILL NOT** override it so you are flexible there...
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
 2) run `npm i` 
 3) Copy source code to insomnia plugins directory(see paths below);
 4) Create environment variables(see structure above) with your values; 
 
 - ___MacOS_:__ ~/Library/Application\ Support/Insomnia/plugins/
 
 - _**Windows**_: %APPDATA%\Insomnia\plugins\
 
 - _**Linux**_: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
 
 
 ### Todos
  - Write Tests
  - Publish plugin to [npm](https://www.npmjs.com/)
 