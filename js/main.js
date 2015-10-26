import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');

import SportsModel from './sports_model';
import SportsCollection from './sports_collection';
import SportsTemplate from './sports_template';

const APP_ID = 'Cn6XaOE9o7gphoXdqiAyrA4pmEl4iOltLrIXnXUw';
const API_KEY = 'auFwqltZUg5G3ZYcY7CMH5yWQh5A6QMZs2ICuMI9';

$.ajaxSetup ({

  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }

});

window.SportsCollection = SportsCollection;

let sports = new SportsCollection();

sports.comparator = 'funScore';

function renderSports () {

  let $ul = $('<ul></ul>');
    
  _.sortBy(sports, 'sports.funScore');

  sports.each(function(sport){
    let dataObject = sport.toJSON();
    let $li = $(SportsTemplate(dataObject));
    $ul.append($li);
  });

  $('body').append($ul);
}

sports.fetch().then(renderSports);

console.log(sports);
