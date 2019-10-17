(function ($) {

    var app = $.sammy('#app', function () {
        this.use('Template');

        this.around(function (callback) {
            var context = this;
            this.load('data/articles.json')
                .then(function (items) {
                    context.items = items;
                })
                .then(callback);
        });

        this.get('#/', function (context) {
            context.app.swap('');
            $.each(this.items, function (i, item) {
                context.render('templates/article.template', { id: i, item: item })
                    .appendTo(context.$element());
            });
        });

        this.get('#/home', function (context) {
            var str = location.href.toLowerCase();
            context.app.swap('');
            context.render('../pages/home.html', {})
                .appendTo(context.$element());
        });

        this.get('#/games', function (context) {
            var str = location.href.toLowerCase();
            context.app.swap('');
            context.render('../pages/games.html', {})
                .appendTo(context.$element());
        });


        this.before('.*', function () {

            var hash = document.location.hash;
            $("nav").find("a").removeClass("current");
            $("nav").find("a[href='" + hash + "']").addClass("current");
        });

    });

    $(function () {
        app.run('#/about/');
    });

})(jQuery);



