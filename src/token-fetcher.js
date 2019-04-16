const fetch = require('fetch-min');

module.exports = async function (context) {
    console.log('authToken plugin executing ...');
    const authData = await authDataProvider(context);
    console.log(authData);

    if (context.request.hasHeader('Authorization')) {
        console.log(`[header] Skip setting default header ${name}. Already set to ${value}`);
        return;
    }
    context.request.setHeader('Authorization', `bearer ${authData.access_token}`);
    console.log(`[header] Set Authorization header: bearer ${authData.access_token}`);
};

async function authDataProvider(context) {
    const url = context.request.getEnvironmentVariable('url');
    const username = context.request.getEnvironmentVariable('username');
    const password = context.request.getEnvironmentVariable('password');
    const client_id = context.request.getEnvironmentVariable('client_id');
    const client_secret = context.request.getEnvironmentVariable('client_secret');

    let responseData = await window.fetch(`http://${url}/oauth/token?username=${username}&password=${password}&scope=api&client_id=${client_id}&client_secret=${client_secret}&grant_type=password`,
        {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            }
        }
    ).then((response) => {
            return response;
        }).catch((error) => {
            console.error(error);
        });
    let response = await responseData.json();
    console.log(response);
    return response;
}
