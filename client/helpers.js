Template.registerHelper('formatDate', function(date) {
    return date.toLocaleDateString();
});

Template.registerHelper('formatDateTime', function(date) {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

Template.menu.helpers({
    chatUnread: function() {
        return Chats.find().count()
    },
    chats: function() {
        return Chats.find();
    }
});