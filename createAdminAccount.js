var admin =  require("firebase-admin");
var serviceAccount = require("/path-to-your-service-account-private-key");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore()

admin
    .auth()
    .createUser({
        email: 'admin@email.com',
        password: 'password',
    })
    .then((userRecord) => {
        console.log('Successfully created admin user:', userRecord.uid);
        
        admin.auth().setCustomUserClaims(userRecord.uid, {admin: true})
        db.collection('users').doc(userRecord.uid).set({
            type: 2, // admin type
            lastName: 'Temp',
            firstName: 'Jays'
        }).catch(err => {
            console.log(err)
        });
    })
    .catch((error) => {
        console.log('Error creating admin user:', error);
    });
