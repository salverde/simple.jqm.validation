// TODO clean up optimize then push to github (public)


$('#main').live('pageinit',function(event){		

	if($('#contactus')) {
	
	  	$('#send').click(function() {
		    var errors = 0;
		    $("#contactus :input").map(function(){
		    
		         if( !$(this).val() ) { errors++; }    
		    });
		    
		    if(errors > 0){  
				// popup dialog with generic error message
		        $.mobile.changePage("#error_dialog", {
						transition: "pop",
						role: "dialog"
					});
		        
		    } else {    
                // changePage to posting code
				$.mobile.changePage("contact_action.cfm", {
					type: "post", 
					data: $("#contactus").serialize()
				});
			
			}
						
			// always return false prevent form from posting
			return false;

		});
	}

});