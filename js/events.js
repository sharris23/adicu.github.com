$(document).ready(function(){

	var url = "https://www.googleapis.com/calendar/v3/calendars/adicu.com_tud5etmmo5mfmuvdfb54u733i4%40group.calendar.google.com/events?maxResults=10000&singleEvents=true&key=AIzaSyBztZfIH_qcLxRBsjcJN5Q5-7YAlfyLovE";
	
	$.get(url, function(response){
		
		if (typeof response == 'string' || response instanceof String)
		{
			response = $.parseJSON(response);
		}
		var num = 0;
		response.items.forEach(function(event){
			
			if(event != undefined && event.start != undefined && event.start.dateTime != undefined)
			{
				var original = event.start.dateTime;
				
				var year = original.substring(0, 4);
				var month = original.substring(5, 7);
				var day = original.substring(8, 10);
				
				var summary = event.summary != undefined ? event.summary : "No Title";
				var description = event.description != undefined ? event.description : "No Description";
			
				var html = "<li data-link=" + event.htmlLink + " class='" + event.summary + "' title='" + month + " " + day + " " + year + " " + "'>" + description + "</li>";
				$("#eventsList").append(html);
			}
		});
		
		var timeline = new Timeline("timeline");
		
	});
});