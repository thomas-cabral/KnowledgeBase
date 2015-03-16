Router.configure({
    layoutTemplate: 'base'
});

Router.map(function() {
    this.route('index', {
        path: '/',
        onBeforeAction: function () {
            AccountsEntry.signInRequired(this);
        }
    });

    this.route('postList', {
        path: '/posts',
        onBeforeAction: function () {
            AccountsEntry.signInRequired(this);
        }
    });

    this.route('postDetail', {
        path: '/posts/:_id/',
        data: function() {
            return Posts.findOne({_id: this.params._id})
        },
        onBeforeAction: function () {
            AccountsEntry.signInRequired(this);
        }
    });

    this.route('chatList', {
        path: '/chats',
        onBeforeAction: function () {
            AccountsEntry.signInRequired(this);
        }
    });

    this.route('chatDetail', {
        path: '/chats/:_id',
        data: function() {
            return Chats.findOne({_id: this.params._id})
        },
        onBeforeAction: function () {
            AccountsEntry.signInRequired(this);
        }
    });
});
