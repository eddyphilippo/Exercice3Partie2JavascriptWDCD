function zoomin(){
        var myImg = document.getElementById("myImg");
        var currWidth = myImg.clientWidth;
        if(currWidth == 1000) return false;
         else{
            myImg.style.width = (currWidth + 50) + "px";
        }
    }
    function zoomout(){
        var myImg = document.getElementById("myImg");
        var currWidth = myImg.clientWidth;
        if(currWidth == 200) return false;
		 else{
            myImg.style.width = (currWidth - 100) + "px";
        }
    }
