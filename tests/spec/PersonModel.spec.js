
describe('PersonModel spec', function() {

  var model;

  beforeEach(function(){

    model = new PersonModel();

  });

  it('Model should be created', function () {

    expect(model).toBeDefined();

  });

  it('When  a PersonModel is  created, it  must have null  attributes ', function() {

    expect(model.get("id")).toEqual(null);
    expect(model.get("name")).toEqual(null);
    expect(model.get("age")).toEqual(null);
    expect(model.get("count")).toEqual(0);

  });

  it('When a PersonModel is set, the attributes can be gotten  correctly', function(){

    model.set({'id':1,'name':'the name','age':24});

    expect(model.get("id")).toEqual(1);
    expect(model.get("name")).toEqual("the name");
    expect(model.get("age")).toEqual(24);
    expect(model.get("count")).toEqual(0);

  });

});
