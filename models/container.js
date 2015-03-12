Schema.Container = new SimpleSchema({
    title: {
        type: String,
        label: "Name"
    },
    users: {
        type: [Schema.User]
    }
});