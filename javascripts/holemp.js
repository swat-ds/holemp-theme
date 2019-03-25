/*

holidays in the empire - berlin child theme
https://ds-exhibits.swarthmore.edu/holidays-in-the-empire
neatline emoji helper

*/

(function ($) {    

    Holemp.emoji = function(){

        const emoji = {
            guidebooks: 'books.png',
            geography: 'mountain.png',
            people: 'bust_in_silhouette.png',
            religion: 'mosque.png',
            climate: 'sunny.png',
            cities: 'house-buildings',
            culture: 'crescent_moon.png',
            economy: 'monybag.png',
            encounters: 'eye.png'
        }

        const baseUrl = 'https://ds-exhibits.swarthmore.edu/holidays-in-the-empire/themes/theme-holemp/emoji/'

        emoji.map( function(value, key) {

            $.each($('[*|href="' + key + '"]'), function(i,e) { 
                $(e).attr('xlink:href', baseUrl + value) 
            })

        });
    };
})(jQuery)
