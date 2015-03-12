Schema.Post = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    createdBy: {
        type: String,
        autoValue: function() {
            if(this.isInsert) {
                return this.userId
            }
        }
    },
    body: {
        type: String,
        label: "Body",
        autoform: {
            type: "textarea",
            rows: 5
        }
    },
    score: {
        type: Number,
        autoValue: function() {
            if (this.isInsert) {
                return 0;
            }
        }
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if(this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
    comments: {
        type: Array,
        optional: true
    },
    'comments.$': {
        type: Object
    },
    'comments.$.comment': {
        type: String,
        autoform: {
            type: "textarea",
            rows: 3
        }
    },
    'comments.$.createdBy': {
        type: String,
        autoValue: function() {
            return this.userId
        }
    },
    'comments.$.createdAt': {
        type: Date,
        autoValue: function() {
            return new Date;
        }
    },
    'comments.$.replies': {
        type: Array,
        optional: true
    },
    'comments.$.replies.$': {
        type: Object
    },
    'comments.$.replies.$.reply': {
        type: String,
        autoform: {
            type: "textarea",
            rows: 3
        }
    }
});

