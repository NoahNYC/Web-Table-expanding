


function defaultId() {


	$(".content").each(function(index, value) {
		$(this).attr("id", index);
	});


}

//

$(document).ready(function(){
	defaultId();
    $('body').on('click','.content', function(){
		//Tells jQuery to listen for click event in table tr elements//
	var row =  $(this).closest('tr') ;
	var rowId = $(this).attr('id') ;
		//Gets the clicked row//
	if (row.next().hasClass("metadata")) {

    	//Checks whether or not the row under it is extra data or a regular default row//

		$(".metadata").each(function() {

			row.nextUntil('.content').addClass(rowId);
		//Loops through metadata...//

			if ($(this).hasClass(rowId)) {

		//True if metadata has the same class as the parent row, a.k.a. content row//

				$(this).toggleClass('active');
			}
		//

		});
		//Toggles a CSS class that either displays or hides the rows.//
	}

	else {

		row.nextUntil('.content').addClass(rowId);



		//Adds rows of extra data after clicked row, from top down.  To add more rows, just copy and paste a line.//
	}
    });
});




//MetaData toggler//
