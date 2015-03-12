Router.configure({
    layoutTemplate: 'base'
});

Router.map(function() {
    this.route('index', {
        path: '/'
    });

    this.route('postList', {
        path: '/posts'
    });

    this.route('postDetail', {
        path: '/posts/:_id/',
        data: function() {
            return Posts.findOne({_id: this.params._id})
        }
    });
});
