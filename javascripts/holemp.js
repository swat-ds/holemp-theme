/*

holidays in the empire - berlin child theme
https://ds-exhibits.swarthmore.edu/holidays-in-the-empire
neatline emoji helper

*/

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

$.map(emoji, function(value, key) {

    $.map($('[*|href="' + key + '"]'), function(i,e) { 
	console.log(e,key)
        $(e).attr('xlink:href', baseUrl + emoji[key]) 
    })

});

