$('#main').live('pageinit',function(event){		

  	$('#send').click(function() {
	    var errors = 0;
	    $(".simple_validate :input").map(function(){
	    
	         if( !$(this).val() ) { errors++; }    
	    });
	    
	    if(errors > 0){  
			// popup dialog with generic error message
	        $.mobile.changePage("#error_dialog", {
				transition: "pop",
				role: "dialog"
			});  
			  	        
	    } else {    
	        // load post page
			$.mobile.changePage("", {   				
				type: "post", 
				data: $(".simple_validate").serialize()
			});
	
		}  
					
		// always return false prevent form from posting
		return false;

	});  


});