import React from 'react';
import './Up.scss';
import $ from "jquery"


const Up = () =>{

$(document).ready(function(){


    // Scroll Up Button
    
    $(window).scroll(function()
    {
        var scrolltop=$(this).scrollTop();
        if(scrolltop>=400)
        {
            $("#up").show();
        }
        else { $("#up").hide();
        }
        });
        $("#up").click(function()
        {
            $("html,body").animate({scrollTop: 0}, 1000);
        });
    
    
    });




    return (
             <div id="up" class=" animate up"></div>


    )
    
    }
    
    export default Up