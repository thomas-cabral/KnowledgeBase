Meteor.methods({
    archiveChat: function (chatId, archiveChat) {
        Chats.update(chatId, { $set: { archive: archiveChat } });
    }
});