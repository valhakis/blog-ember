export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

   this.namespace = '/api';
   this.get('/posts', function() {
      return {
         data: [
            {
               type: 'posts',
               id: 1,
               attributes: {
                  title: 'the post 1',
                  body: 'the lorem ipsum'
               }
            },
            {
               type: 'posts',
               id: 2,
               attributes: {
                  title: 'the post 2',
                  body: 'the lorem ipsum'
               }
            },
            {
               type: 'posts',
               id: 3,
               attributes: {
                  title: 'the post 3',
                  body: 'the lorem ipsum'
               }
            },
            {
               type: 'posts',
               id: 4,
               attributes: {
                  title: 'the post 4',
                  body: 'the lorem ipsum'
               }
            },
         ]
      };
   });
}
