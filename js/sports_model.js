import Backbone from 'backbone';


let SportsModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/Sports',
  idAttribute: 'objectId'

});


export default SportsModel;