// models/todo.js
var PlaceToEat = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  address: DS.belongsTo('Address'),
  userAdded: DS.belongsTo('User'),
  addedDate: DS.attr('date')
});

PlaceToEat.reopenClass({
  FIXTURES: [
  {
    id: "1",
    title: 'install EAK',
    isCompleted: true
  }, {
    id: "2",
    title: 'install additional dependencies',
    isCompleted: true
  }, {
    id: "3",
    title: 'develop amazing things',
    isCompleted: false
  }
]});

export default PlaceToEat;
