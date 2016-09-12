var PersonModel= Backbone.Model.extend({
  defaults: {
    id: null,
    name: null,
    age: null,
    count: 0
  },
  initialize: function(){
      console.info("init");
  }
});
