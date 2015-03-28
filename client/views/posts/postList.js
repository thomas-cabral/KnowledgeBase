Template.postList.helpers({
    posts: function () {
        return Posts.find({}, {sort: {score:-1}});
    }
});

Template.postList.events({
    "click #addPost": function() {
        var newPost = true;
        return newPost
    }
});

Template.postListItem.helpers({
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    }
});

Template.postList.events({
    "click #upvote": function() {
        Posts.update(this._id, {$set: {score: this.score += 1}})
    },
    "click #downvote": function() {
        Posts.update(this._id, {$set: {score: this.score -= 1}})
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
