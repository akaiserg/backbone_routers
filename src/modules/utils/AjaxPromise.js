var AjaxPromise={

  getTemplate: function(url,typeRequest){

        var deferred=  new $.Deferred();
        $.ajax({
            url         : url,
            async       : true,
            type        : typeRequest,
            //contentType : "application/json",
            //data        : JSON.stringify(dataToSend),
            success     : deferred.resolve, // Promise's resolve
            error       : deferred.resolve  // Promise's resolve
        });
        return deferred.promise();

    }

};
