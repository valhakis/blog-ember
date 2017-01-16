import Ember from 'ember';

var users = [
   {
      id: 1,
      name: 'User Name',
      email: 'user@name.com'
   },
   {
      id: 2,
      name: 'User Name',
      email: 'user@name.com'
   },
   {
      id: 3,
      name: 'User Name',
      email: 'user@name.com'
   }
];

var posts = [
   {
      id: 1,
      title: 'The post',
      body: 'the post body'
   },
   {
      id: 2,
      title: 'The post',
      body: 'the post body'
   },
   {
      id: 3,
      title: 'The post',
      body: 'the post body'
   },
];

export default Ember.Route.extend({
   model() {
      return {
         elements: ['one', 'two', 'three'],
         users: users,
         posts: posts
      };
   }
});
