_e('submit').onclick = function() {
        _e('container2').innerHTML = 'Thank you for the feedback! :D';
   
}

function _e(id) {
   return document.getElementById(id);
}

function displayStatus(number){
        if(number == 1)
        {
            document.getElementById("container").innerHTML = "Extremely Bad";
            
        }
       
       else if(number == 2)
        {
            document.getElementById("container").innerHTML = "Dissastified";  
            
        }
        else if(number == 3)
        {
            document.getElementById("container").innerHTML = "Fair";  
        }
        else if(number == 4)
        {
            document.getElementById("container").innerHTML = "Satisfied";
        }
        else if(number == 5)
        {
            document.getElementById("container").innerHTML = "Delighted";
        }
    
    }
