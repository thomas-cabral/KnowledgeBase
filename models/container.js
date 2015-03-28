Schema.Container = new SimpleSchema({
    title: {
        type: String,
        label: "Name"
    },
    members: {
        type: Array,
        optional: true
    },
    'members.$': {
        type: Object
    },
    'members.$.member': {
        type: String,
        autoform: {
            options: function () {
                var options = [];
                Meteor.users.find().forEach(function (element) {
                    if (element._id == Meteor.userId() || element._id == this.member)
                        return;

                    options.push({
                        label: ((element.username) ? element.username : element.profile.name), value: element._id
                    })
                });
                return options;
            }
        }
    }
});