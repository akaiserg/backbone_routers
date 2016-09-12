var HomeView = Backbone.View.extend({

    tagName: "div",

	id: "home-view_id",

    template: 'view-home',

	htmlTemplate:null,

	initialize: function() {

		this.collection.bind("change", function(){
			  // data changes
		});

	},

	render: function() {

		//$("body").html(this.el);
		//this.$el.html(data+"<br><a href='#home'>Go to home</a>");
		this.getTemplate();

	},

	getTemplate:function(){

		var that=this;
		if(this.htmlTemplate===null){
			var promise=AjaxPromise.getTemplate("/src/templates/" + this.template + ".html","GET");
			promise.then(function(template){
				that.htmlTemplate=template;
				that.setTemplate(that.htmlTemplate);
			});
		}else{
			that.setTemplate(that.htmlTemplate);
		}

	},

	setTemplate: function(template){

		var that=this;
        var justTemplate = _.template(template);
		//console.info(that.collection);
		var age=0;
		var plusOne=0;
		if(this.collection.length>0){
            age=((_.reduce(that.collection.models, function(memory, model){return memory + model.get("age");}, 0))/(this.collection.length)) ;
            plusOne=((_.reduce(that.collection.models, function(memory, model){return memory + model.get("count");}, 0))/(this.collection.length)) ;
		}
		$("body").html(that.el);
		that.$el.html(justTemplate({
            total  :this.collection.length,
			age    :age,
			plusOne:plusOne
		}));

	}

});
