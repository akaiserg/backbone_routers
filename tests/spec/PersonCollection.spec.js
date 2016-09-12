
describe('PersonCollection spec', function() {

  var collection;

  beforeEach(function(){

    collection = new PersonCollection();
    collection.reset();

  });

  it('Collection should be created', function () {

    expect(collection).toBeDefined();

  });

  it('When  a collection does not have item  it   size should be 0 ', function() {

    expect(collection.length).toEqual(0);

  });

  it('When  a collection  adds a model  the  size should be 1', function() {

    model = new PersonModel();
    model.set({'id':'1'} );
    model.set({'name':'name'});
    model.set({'age':28} );

    collection.add(model);

    expect(collection.length).toEqual(1);

  });


  it('When  a collection  removes a model  the  size should be 0', function() {

    model = new PersonModel();
    model.set({'id':'1'} );
    model.set({'name':'name'});
    model.set({'age':28} );
    collection.add(model);

    collection.remove(model);

    expect(collection.length).toEqual(0);

  });


});