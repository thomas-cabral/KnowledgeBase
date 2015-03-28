Posts = new Mongo.Collection("posts");
Posts.attachSchema(Schema.Post);
Posts.allow({
    insert: function(userId) {
        return !! userId;
    },
    update: function(userId, doc, fields, modifier) {
        if (modifier["$push"] && modifier["$push"].comments) {
            return !! userId; // don't deny this
        }
        else if (modifier["$set"] && modifier["$set"].score) {
            return !! userId; // don't deny this
        }
        else {
            return doc.createdBy === Meteor.userId();
        }
    }
});

Chats = new Mongo.Collection("chats");
Chats.attachSchema(Schema.Chat);
Chats.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true
    }
});

Containers = new Mongo.Collection("containers");
Containers.attachSchema(Schema.Container);
Containers.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true
    }
});

Comments = new Mongo.Collection("comments");
Comments.attachSchema(Schema.Comment);