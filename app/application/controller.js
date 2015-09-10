import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  date: Ember.computed(function() {
    console.log('computed');
    return moment();
  }).volatile()
});
