$(function() {

    var articles = [
        {"title": "Star Ocean review", "columns": 2},
        {"title": "Lego Star Wars review", "columns": 2},
        {"title": "Prison Architect review", "columns": 1},
        {"title": "Inside review", "columns": 2},
        {"title": "Umbrella Corps review", "columns": 2},
        {"title": "Dino Dini's Kick Off review", "columns": 3},
        {"title": "Trials of the Dragon review", "columns": 1},
        {"title": "Mighty No. 9 review", "columns": 1},
        {"title": "Edge of Nowhere review", "columns": 2},
        {"title": "Guilty Gear Xrd Revelator review", "columns": 1},
        {"title": "Sherlock Holmes review", "columns": 2},
        {"title": "Mirror's Edge Catalyst review", "columns": 3},
        {"title": "Kirby: Planet Robobot review", "columns": 3},
        {"title": "Dangerous Golf review", "columns": 1},
        {"title": "Teenage Mutant Turtles review", "columns": 1},
        {"title": "The Warcraft movie review", "columns": 2},
        {"title": "Overwatch Review", "columns": 2},
        {"title": "The Witcher 3 review", "columns": 2}
    ]

    $.each(articles, function(key, article) {
        if (article.title.length) {
            $('.row').append('<div class="' + getColClass(article.columns) + ' article-item">' + article.title + '</div>')
        }
    });

    function getColClass(article) {
        switch (article) {
            case 1:
                col = 'column-1';
                break;
            case 2:
                col = 'column-2';
                break;
            case 3:
            default:
                col = 'column-3';
                break;
        }
        return col;
    };
});