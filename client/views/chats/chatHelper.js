Template.chatList.helpers({
    chats: function() {
        if (!!Meteor.userId()) {
            return Chats.find()
        }
    },
    chatTo: function() {
        if (!!Meteor.userId()) {
            if (this.chatTarget === Meteor.userId()) {
                return Meteor.users.findOne({_id: this.creator})
            } else {
                return Meteor.users.findOne({_id: this.chatTarget});
            }
        }
    }
});

Template.chatDetail.helpers({
    chatTo: function() {
        if (this.chatTarget === Meteor.userId()) {
            return Meteor.users.findOne({_id: this.creator})
        } else {
            return Meteor.users.findOne({_id: this.chatTarget});
        }
    }
});

Template.chatDetail.events({
    "click .toggle-archive": function () {
        Meteor.call("archiveChat", this._id, ! this.archive);
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

Template.chatMenu.helpers({
    chatWith: function() {
        if (this.chatTarget === Meteor.userId()) {
            return Meteor.users.findOne({_id: this.creator})
        } else {
            return Meteor.users.findOne({_id: this.chatTarget});
        }
    }
});