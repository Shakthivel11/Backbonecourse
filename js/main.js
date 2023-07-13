var Song = Backbone.Model.extend({
    initialize:function(){
        console.log("A new song has been created")
    }

});

var song =new Song();

//Validation 

var Song = Backbone.Model.extend({
    validate: function(artist){
        if(!artist.title)
        return "Title is required";
    }
});
var song = new Song();

song.isValid();

var lastError = song.validationError;
