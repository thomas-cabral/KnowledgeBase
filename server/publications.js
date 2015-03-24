Meteor.publish('posts', function() {
    if(this.userId) {
        return Posts.find();
    }
});

Meteor.publish('users', function() {
    if (this.userId) {
        return Meteor.users.find();
    }
});

Meteor.publish('chats', function() {
    return Chats.find({
        $or: [
            {creator: this.userId},
            {chatTarget: this.userId}
        ]
    });
});

Meteor.publish('containers', function() {
    return Containers.find({});
});