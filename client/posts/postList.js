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