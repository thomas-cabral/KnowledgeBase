Template.chatList.helpers({
    chats: function() {
        if (!!Meteor.userId()) {
            return Chats.find({creator: Meteor.userId()})
        }
    },
    chatTo: function() {
        if (!!Meteor.userId()) {
            return Meteor.users.findOne({_id: this.chatTarget})
        }
    }
});

Template.chatDetail.helpers({
    chatTo: function() {
        return Meteor.users.findOne({_id: this.chatTarget})
    }
});

Template.messageDetail.helpers({
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    },
    myComment: function() {
        if (this.createdBy === Meteor.userId()){
            return true;
        }
    }
});