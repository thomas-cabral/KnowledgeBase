Template.registerHelper('formatDate', function(date) {
    return date.toLocaleDateString();
});

Template.registerHelper('formatDateTime', function(date) {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});