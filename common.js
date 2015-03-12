Posts = new Mongo.Collection("posts");
Posts.attachSchema(Schema.Post);
Posts.allow({
    insert: function(userId, doc) {
        return !! userId;
    },
    update: function(userId, doc, fields, modifier) {
        if (modifier["$push"] && modifier["$push"].comments) {
            return !! userId; // don't deny this
        }
        else {
            return doc.createdBy === Meteor.userId();
        }
    }
});

Containers = new Mongo.Collection("containers");
Containers.attachSchema(Schema.Container);

Comments = new Mongo.Collection("comments");
Comments.attachSchema(Schema.Comment);