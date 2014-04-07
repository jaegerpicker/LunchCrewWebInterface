// models/todo.js
var Address = DS.Model.extend({
  street: DS.attr('string'),
  street2: DS.attr('string'),
  city: DS.attr('string'),
  zipcode: DS.attr('int'),
  state: DS.attr('string'),
  lat: DS.attr(),
  lon: DS.attr(),
  placetoeat: DS.belongsTo('PlaceToEat')
});

Address.reopenClass({
  FIXTURES: [
  {
    id: "1",
    street: '123 Easy St',
    street2: '',
    city: 'Portland',
    zipcode: 04101,
    state: 'Maine',
    lat: 10.0000,
    lon: 10.0000
  }, {
    id: "2",
    street: '123 Second St',
    street2: '',
    city: 'Portland',
    zipcode: 04101,
    state: 'Maine',
    lat: 10.0000,
    lon: 10.0000
  }, {
    id: "3",
    street: '123 Thrid St',
    street2: '',
    city: 'Portland',
    zipcode: 04101,
    state: 'Maine',
    lat: 10.0000,
    lon: 10.0000
  }
]});

export default Address;
