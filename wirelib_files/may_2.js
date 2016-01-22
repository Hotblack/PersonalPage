    var offset_1 = 0.01;
    var offset_2 = 0.02;
    var offset_3 = 0.04;

    var v1 = 0.2;
    var v2 = 0.2;
    var v3 = 0.2;

    var isMore = false;


$(function generate() {
    var canvas, context, image, imageData, x, y, offset;
     
    canvas = $("#bgcanvas")[0];
    context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    imageData = context.createImageData(canvas.width, canvas.height);
    
    for(y = 0; y < imageData.height; y += 1) {
        for(x = 0; x < imageData.width; x += 1) {
            offset = x * 4 + y * 4 * imageData.width;
            imageData.data[offset] = Math.sin(x * offset_1) * 127 + 256;
            imageData.data[offset + 1] = Math.sin(y * offset_2) * 127 + 256;
            imageData.data[offset + 2] = Math.cos(x * offset_3 + y * offset_3) * 127 + 256;
            imageData.data[offset + 3] = 255;
        }
    }
    
    context.putImageData(imageData, 0, 0);

    window.setInterval(automate,100);
});

function do_things(){


    var val = $('#slider_1').slider("option", "value");

    generate_new($('#slider_1').slider("option", "value"), $('#slider_2').slider("option", "value"),$('#slider_3').slider("option", "value"));


}

function generate_new(v1, v2, v3){

    var canvas, context, image, imageData, x, y, offset;

    offset_1 = v1;
    offset_2 = v2;
    offset_3 = v3;
    
    canvas = $("#bgcanvas")[0];
    context = canvas.getContext("2d");
 
    imageData = context.createImageData(canvas.width, canvas.height);
    
    for(y = 0; y < imageData.height; y += 1) {
        for(x = 0; x < imageData.width; x += 1) {
            offset = x * 4 + y * 4 * imageData.width;
            imageData.data[offset] = Math.sin(x * offset_1) * 127 + 128;
            imageData.data[offset + 1] = Math.sin(y * offset_2) * 127 + 128;
            imageData.data[offset + 2] = Math.cos(x * offset_3 + y * offset_3) * 127 + 128;
            imageData.data[offset + 3] = 255;
        }
    }

    context.clearRect(0,0, canvas.width, canvas.height)
    
    context.putImageData(imageData, 0, 0);

    /*canvas = $("#canvas")[1];
    context = canvas.getContext("2d");
 
    imageData = context.createImageData(canvas.width, canvas.height);
    
    for(y = 0; y < imageData.height; y += 1) {
        for(x = 0; x < imageData.width; x += 1) {
            offset = x * 4 + y * 4 * imageData.width;
            imageData.data[offset] = Math.sin(x * offset_1) * 127 + 256;
            imageData.data[offset + 1] = Math.sin(y * offset_2) * 127 + 256;
            imageData.data[offset + 2] = Math.cos(x * offset_3 + y * offset_3) * 127 + 256;
            imageData.data[offset + 3] = 255;
        }
    }
    
    context.putImageData(imageData, 0, 0);*/

}

$(function() {
    $( "#slider_1").slider({
        range: .01,
        min: .01,
        max: .5,
        step: .001,
        slide: function(event, ui){
            //alert(ui.value);
            $("#output_1").text(ui.value);
             generate_new($('#slider_1').slider("option", "value"),$('#slider_2').slider("option", "value"),$('#slider_3').slider("option", "value"));
            }

        });

    $( "#slider_2").slider({
        range: .03,
        min: .01,
        max: .5,
        step: .001,
        slide: function(event, ui) {
            $("#output_2").text(ui.value);
            generate_new($('#slider_1').slider("option", "value"),$('#slider_2').slider("option", "value"),$('#slider_3').slider("option", "value"));
        }
        });

    $( "#slider_3").slider({
        range: .04,
        min: .01,
        max: .5,
        step: .001,
        slide: function(event, ui){
            $("#output_3").text(ui.value);
            generate_new($('#slider_1').slider("option", "value"),$('#slider_2').slider("option", "value"),$('#slider_3').slider("option", "value"));
        }
        });

    console.log($('#slider_1').slider("option", "value"));
  });

function automate (){

        
        //var v1 = Math.random(0.01, .5);
        //var v2 = Math.random(0.01, .5);
        //var v3 = Math.random(0.01, .5);  
        

        if (v3 < 0.2 && isMore == false) {
            //v1 = v1 + 0.01; 
            //v2 = v2 + 0.01; 
            console.log("increasing");
            v3 = v3 + 0.01;

        }

        if (v3 >= 0.2 || isMore) {
            console.log("decreasing");
            isMore = true; 

            v3 = (Math.abs)(v3 - 0.01);

        }

        if (isMore && v3 <= 0.05){
            console.log("flag set");
            isMore = false;
        }
       

        generate_new(v1, v2, v3);
        console.log("v3 is " + v3);
        console.log("isMore is " +isMore);
    
    
}