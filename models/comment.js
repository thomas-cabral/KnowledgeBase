Schema.Comment = new SimpleSchema({
    body: {
        type: String
    },
    objectId: {
        type: String
    },
    createdBy: {
        type: String,
        autoValue: function() {
            return this.userId;
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
    reply: {
        type: [Schema.Comment],
        optional: true
    }
});