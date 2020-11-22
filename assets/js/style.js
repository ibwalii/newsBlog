// JavaScript Document
$(document).ready(function() {
	/*
    $(".panel-body ul li").click(function(e) {
		e.preventDefault();
		var newsid = $(this).val();
		alert("News id "+newsid);
		$.ajax({
           type: "POST",
           url: "pages/request/selectednews.html",
           data: {'newsid':'newsid'}, // serializes the form's elements.
		   beforeSend: function(){
			   $(".post-body").html("<img src='assets/img/Loading_icon.gif' class='center-block'>");
		   },
           success: function(data)
           {
               $(".post-body").html(data); // show response from the php script.
           }
         });
		 
    }); */	
	 $(".panel-body ul li").click(function(e) {
		e.preventDefault();
		$('#container').addClass('container');
		$('#container').removeClass('container-fluid');
		$(".post-body").html("<img src='assets/img/Loading_icon.gif' class='center-block'>");
		var newsid = $(this).val();
		var news = $('#'+newsid).html();
		$(".post-body").html(news);
		if (window.matchMedia('(max-width: 991px)').matches) {
		$('html, body').animate({
        scrollTop: $(".post-body").offset().top
    }, 2000);
		}
		
	 });
	 $('#timetable').click(function(e) {
        $('#container').removeClass('container');
		$('#container').addClass('container-fluid');
    });
	 
});