// models/todo.js
var User = DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  isLoggedIn: DS.attr('boolean')
});

User.reopenClass({
  FIXTURES: [
  {
    id: "1",
    username: 'bobo',
    firstName: 'bob',
    lastName: 'o',
    email: 'bobo@bobo.com',
    isLoggedIn: true
  }, {
    id: "2",
    username: 'bobo',
    firstName: 'bob',
    lastName: 'o',
    email: 'bobo@bobo.com',
    isLoggedIn: false
  }, {
    id: "3",
    username: 'the_great_bobdinnie',
    firstName: 'bob',
    lastName: 'o',
    email: 'bobo_dinnie@bobo_dinnie.com',
    isLoggedIn: false
  }
]});

export default User;
