var PersonRowView = Backbone.View.extend({

	tagName: "tr",

	htmlTemplate:null,

	events: {

    'click .plus-one'     : 'plusOne',
    'click .edit-person'  : 'editPerson',
    'click .delete-person': 'deletePerson'

    },

	plusOne:function(){

        this.model.set({"count":this.model.get("count")+1});
        //console.info(this.model.get("count"));

	},

	editPerson:function(){

		$.event.trigger({
			type: "PersonRowView_edit",
			message: "Edition from PersonRowView",
			model: this.model
		});

	},

	deletePerson:function(){

		$.event.trigger({
			type: "PersonRowView_delete",
			message: "for deleting",
			model: this.model
		});

	},

    initialize: function(options) {

        this.options = options;
        //console.info(this.options);
        this.htmlTemplate=this.options.htmlTemplate;
        this.model=this.options.model;
        this.model.on('change', this.render, this);

	},

	render: function() {

        var justTemplate = _.template(this.htmlTemplate);
        //console.info(this.model);
        this.$el.html(justTemplate({
            id:this.model.attributes.id,
	        name:this.model.attributes.name,
	        age:this.model.attributes.age,
	        count: this.model.attributes.count
        }));
        return this;
        //$("body").html(this.el);
		//this.$el.html(data+"<br><a href='#home'>Go to home</a>");

	}

});