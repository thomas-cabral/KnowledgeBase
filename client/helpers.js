Template.registerHelper('formatDate', function(date) {
    return date.toLocaleDateString();
});

Template.registerHelper('formatDateTime', function(date) {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

Template.menu.helpers({
    chatUnread: function() {
        if (Chats.find({archive: false}).count() < 1) {
            return false;
        }
        return Chats.find({archive: false}).count()
    },
    chats: function() {
        return Chats.find({archive: false});
    }
});