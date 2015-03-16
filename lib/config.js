Meteor.startup(function () {
    AccountsEntry.config({
        wrapLinks: true,
        homeRoute: '/',
        dashboardRoute: '/',
        passwordSignupFields: 'EMAIL_ONLY',
        showOtherLoginServices: true
    });
});