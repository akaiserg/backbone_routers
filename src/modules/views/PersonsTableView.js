var PersonsTableView = Backbone.View.extend({

	tagName: "div",

    id: "person-view_id",

    template: "view-persons",

	templateRow: "view-person",

	htmlTemplate:null,

	htmlTemplateRow:null,

	events: {

        'click .save-info'     : 'saveInfoperson',
		'click .create-person' : 'createPerson'

	},


	createPerson: function(){

        this.cleanForm();
        this.showModal(true);

	},

	saveInfoperson:function(){

		// edition
		if($("#modelId_id").val()!==""){
			var modelToUpdate= this.collection.get($("#modelId_id").val());
			modelToUpdate.set({"count":parseInt($("#plusOne_id").val()),"name":$("#name_id").val(),"age":	parseInt($("#age_id").val())});
			//this.collection.add({modelToUpdate},{ remove: false,add: false,merge: true });
		}else{
			//,{ remove: false,add: false,merge: true }
			this.collection.add({"count":parseInt($("#plusOne_id").val()),"name":$("#name_id").val(),"age":	parseInt($("#age_id").val())});
			this.render();
		}
		this.showModal(false);

	},

    initialize: function() {

        this.messageFromViews();

	},

	render: function() {

        //$("body").html(this.el);
		//this.$el.html(data+"<br><a href='#home'>Go to home</a>");
        this.getTemplate(this.collection);
		//this.getTemplateRows();
		this.delegateEvents();

	},

    getTemplate:function(collection){

        var that=this;
		if(this.htmlTemplate===null){
	        var promise=AjaxPromise.getTemplate("/src/templates/" + this.template + ".html","GET");
	        promise.then(function(template){
                that.htmlTemplate=template;
                that.setTemplate(that.htmlTemplate,collection);
	        });
		}else{
            that.setTemplate(that.htmlTemplate,collection);
		}

    },

	setTemplate: function(template){

		var that=this;
		var jsutTemplate = _.template(template);
		//console.info(jsutTemplate);
		$("body").html(that.el);
		//console.info(that.$el);
		that.$el.html(jsutTemplate({persons:that.collection.toJSON()}));
		//this.$el.replaceWith("#table-body");
		this.getTemplateRows();

	},

	messageFromViews: function(){

        var that= this;
		$(document).on("PersonRowView_delete", function (evt) {
				 //console.info(evt);
				 //console.info(that.collection);
				 that.collection.remove(evt.model);
				 // reder again
				 that.render();
		});

		$(document).on("PersonRowView_edit", function (evt) {
				 //console.info(evt);
				 that.cleanForm();
				 that.setInfoToEditPerson(evt.model);
				 that.showModal(true);
				 // reder again
				 //that.getTemplate(this.collection);
		});

	},


	showModal:function(isShown){

		if(isShown){
            $('#modalForm_id').modal('show');
		}else{
            $('#modalForm_id').modal('hide');
		}

	},

	cleanForm:function(){

		$("#name_id").val("");
		$("#age_id").val("");
		$("#plusOne_id").val("");
		$("#modelId_id").val("");

	},

	setInfoToEditPerson: function(modelToEdit){

        $("#name_id").val(modelToEdit.get("name"));
        $("#age_id").val(modelToEdit.get("age"));
        $("#plusOne_id").val(modelToEdit.get("count"));
        $("#modelId_id").val(modelToEdit.get("id"));


	},


	getTemplateRows:function(){

		var that=this;
		if(that.htmlTemplateRow===null){
			var promise=AjaxPromise.getTemplate("/src/templates/" + this.templateRow + ".html","GET");
			promise.then(function(template){
				that.htmlTemplateRow=template;
				that.setRows(that.collection,that.htmlTemplateRow);
			});
		}else{
			that.setRows(that.collection,that.htmlTemplateRow);
		}

	},


	setRows:function(collection,rowTemplate){

        collection.each(function(model) {
            var personRowView = new PersonRowView({
                htmlTemplate: rowTemplate,
                model: model
            });
            //this.$el.find("tbody").append(personRowView.render().el);
            this.$el.find('tbody[id="table-body"]').append(personRowView.render().el);
        }.bind(this));


	}

});
