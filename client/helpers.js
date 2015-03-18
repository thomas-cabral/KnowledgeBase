Template.registerHelper('formatDate', function(date) {
    return date.toLocaleDateString();
});

Template.registerHelper('formatDateTime', function(date) {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

Template.registerHelper('profileImage', function(userId) {
    var user = Meteor.users.findOne({_id: userId});
    var imageUrl = "https://placehold.it/150x150";

    if (user.services == "twitter") {
        imageUrl = user.services.twitter.profile_image_url_https;
    }
    else if (user.services == "google"){
        imageUrl = user.services.google.picture;
    }

    return imageUrl;
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