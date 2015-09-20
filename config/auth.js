// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '875476195881586', // your App ID
        'clientSecret'  : 'ea01312ac4c7d2749b9178d57ff0e88c', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'TedCFfTQzP1Mi92KBWr5chxJb',
        'consumerSecret'    : 'diowgLSJJXNh1vHnMMMgrzIlijJg1Y36Fr9vZEsFS18nKUd4rA',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};