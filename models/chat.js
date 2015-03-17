Schema.Chat = new SimpleSchema({
    creator: {
        type: String,
        autoValue: function() {
            if(this.isInsert) {
                return this.userId
            }
        }
    },
    chatTarget: {
        type: String,
        autoform: {
            options: function () {
                var options = [];
                Meteor.users.find().forEach(function (element) {
                    if (element._id == Meteor.userId())
                        return;

                    options.push({
                        label: ((element.username) ? element.username : element.profile.name), value: element._id
                    })
                });
                return options;
            }
        }
    },
    archive: {
        type: Boolean,
        defaultValue: false
    },
    messages: {
        type: Array,
        optional: true
    },
    'messages.$': {
        type: Object
    },
    'messages.$.message': {
        type: String
    },
    'messages.$.createdBy': {
        type: String,
        autoValue: function() {
            return this.userId
        }
    },
    'messages.$.createdAt': {
        type: Date,
        autoValue: function() {
            return new Date;
        }
    }
});