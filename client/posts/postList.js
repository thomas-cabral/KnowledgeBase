Template.postList.helpers({
    posts: function () {
        return Posts.find({});
    }
});

Template.postDetail.helpers({
    isOwner: function () {
        return this.createdBy === Meteor.userId();
    }
});

Template.commentDetail.helpers({
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    }
});

