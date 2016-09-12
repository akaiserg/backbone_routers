var PersonCollection= Backbone.Collection.extend({

  model: PersonModel,

  internalId:0,

 initialize: function(){

   /*this.on('add', function(model) {
     console.log(model);
     model.set({"id":this.getNewInternalId()});
  });*/

},

add: function( model, options ){

    model.id=this.getNewInternalId();
    Backbone.Collection.prototype.add.call(this, model);
    
},


getNewInternalId:function(){

    this.internalId=this.internalId+1;
    return this.internalId;

 }


});
