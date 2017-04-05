function timer(){
	var inputText=document.getElementById("inputbox").value;
		inputText = inputText.replace(/\s\s+/g, ' ');
		inputText=inputText.trim();
		var arr=inputText.split(" ");
		if(arr[0]===''){
				var StartTime= new Date();
				function DisplayTime(){
					var CurrentTime= new Date();
					var TimeDiff=CurrentTime.getTime()-StartTime.getTime();
					TimeDiff=Math.floor(TimeDiff/1000);
			        var ShowTime=(TimeDiff<10)?'0:0':'0:';
				    document.getElementById('timerwatch').innerHTML=ShowTime+TimeDiff;
				}
				var StopTime=setInterval(DisplayTime, 1000);
				function StopUpdatingTime(){
					clearInterval(StopTime);
					document.getElementById("inputbox").disabled = true;
				}
				setTimeout(StopUpdatingTime, 30000);
				}
}
//setTimeout(timer, 6000);
function speedCal(){
		function Speed(){
		var inputText=document.getElementById("inputbox").value;
		inputText = inputText.replace(/\s\s+/g, ' ');
		inputText=inputText.trim();
		var arr=inputText.split(" ");
        var text=document.getElementById('textbox').value;
        text=text.split(" ");	
        var Err=0;
        if (arr[0]==='') {
        	document.getElementById('timerwatch').innerHTML="Your Speed is 0 Words/M & accracy is 0%." ;
        }
        else{
        for(var i=0;i<arr.length;i++){
        								if(text[i]!=arr[i]){
        									Err+=1;
        									//arr[i].style.backgroundColor="red";
        								}
        							 }
        var Acc=Math.floor((arr.length-Err)/arr.length*100);
        document.getElementById('timerwatch').innerHTML="Your Speed is "+arr.length+" Words/M & accracy is " +Acc+"%." ;
		}
		}
    	setTimeout(Speed, 31000);

}
