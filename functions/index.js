const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message: "Admin was created successfully."
        };
    }).catch(err => {
        return err
    });
});

exports.addClientRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            client: true
        });
    }).then(() => {
        return {
            message: "Client was created successfully."
        };
    }).catch(err => {
        return err
    });
});