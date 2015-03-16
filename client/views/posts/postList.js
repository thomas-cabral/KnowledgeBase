Template.postList.helpers({
    posts: function () {
        return Posts.find({});
    },
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    }
});

Template.postDetail.helpers({
    isOwner: function () {
        return this.createdBy === Meteor.userId();
    },
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    }
});

Template.commentDetail.helpers({
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    }
});

