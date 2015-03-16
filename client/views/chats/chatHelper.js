Template.chatList.helpers({
    chats: function() {
        if (!!Meteor.userId()) {
            return Chats.find({creator: Meteor.userId()})
        }
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