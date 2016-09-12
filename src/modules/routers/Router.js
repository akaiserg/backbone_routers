var Router = Backbone.Router.extend({
	routes : {
		"home" : "home",
		"persons" : "persons"
	},

  viewArray: [],

	viewLocator:function(value){

		var view=this.viewFindByKey(value);
		if(view===null){
            var newView=null;
            switch(value){
                case 'home':
                      newView=new HomeView({collection:this.collection});
                break;
                case 'persons':
                      newView=new PersonsTableView({collection:this.collection});
                break;
            }
            this.viewArray.push({id:value, view:newView});
            return newView;
		}else{
			console.info(this.viewArray);
			return view;
		}

	},


	viewFindByKey:function (value) {

        for (var i = 0; i < this.viewArray.length; i++) {
            var view= this.viewArray[i];
            if (view.id === value) {
                return view.view;
            }
        }
        return null;

    },


	home : function() {

		this.loadView(this.viewLocator("home"));

	},
	persons : function() {

		this.loadView(this.viewLocator("persons"));

	},

    loadView : function(view) {

		this.view && this.view.remove();
		this.view = view;
        this.view.render();

	},

    setCollection: function(collection){

        this.collection=collection;
        //console.info(this.collection.length);

    }


});
