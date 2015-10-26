import Backbone from 'backbone';
import SportsModel from './sports_model';

let SportsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Sports',
  model: SportsModel,
  parse: function(dataObject) {
    return dataObject.results;
  }

});


export default SportsCollection;