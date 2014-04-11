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
    name: 'Flatbeard',
    type: 'pizza',
    address: new Address(),
    userAdded: new User(),
    addedDate: new Date()
  }
]});

export default PlaceToEat;
