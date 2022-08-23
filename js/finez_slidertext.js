$(document).ready(function () {

    var i = 1;
    var tagcount = 5
    var position = '20%';
    function loop() {       
        //$('#headsliding').fadeToggle(1000);
        //$('#tag1').animate({ left: trigger }).delay(3000);
        
        setTimeout(function () {
            if (i <= tagcount) {
                $('#tag' + i).animate({ left: '20%' }, 4000).delay(5000).animate({ left: '2%' }, 2000);
                
            }
            if (i > 5) {
                i = 1;                
                loop();
            }
            else {
                i++;
                loop();
            }
        }, 2000);  
        
    }
    loop();




   

});





