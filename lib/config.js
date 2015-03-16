Meteor.startup(function () {
    AccountsEntry.config({
        wrapLinks: true,
        homeRoute: '/',
        dashboardRoute: '/',
        passwordSignupFields: 'EMAIL_ONLY',
        showOtherLoginServices: false,
        extraSignUpFields: [{             // Add extra signup fields on the signup page
            field: "username",                           // The database property you want to store the data in
            name: "Enter the username you would like",  // An initial value for the field, if you want one
            label: "Username",                      // The html lable for the field
            placeholder: "1337man",                 // A placeholder for the field
            type: "text",                            // The type of field you want
            required: true,                       // Adds html 5 required property if true
            unique: true
        }]
    });
});