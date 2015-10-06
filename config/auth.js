// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '875476195881586', // your App ID
        'clientSecret'  : 'ea01312ac4c7d2749b9178d57ff0e88c', // your App Secret
        'callbackURL'   : 'http://ec2-54-210-134-202.compute-1.amazonaws.com:12102/auth/facebook/callback'
    }
};