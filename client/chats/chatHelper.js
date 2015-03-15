Template.chatList.helpers({
    chats: function() {
        if (Meteor.userId()) {
            return Chats.find({createdBy: Meteor.userId()})
        }

    }
});

Template.messageDetail.helpers({
    author: function() {
        return Meteor.users.findOne({_id: this.createdBy})
    }
});