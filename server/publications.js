Meteor.publish('posts', function() {
    if(this.userId) {
        return Posts.find();
    }
});

Meteor.publish('users', function() {
    return Meteor.users.find();
});

Meteor.publish('chats', function() {
    return Chats.find({
        $or: [
            {creator: this.userId},
            {chatTarget: this.userId}
        ]
    });
});