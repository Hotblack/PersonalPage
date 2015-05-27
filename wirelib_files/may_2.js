    var offset_1 = 0.01;
    var offset_2 = 0.02;
    var offset_3 = 0.04;


$(function generate() {
    var canvas, context, image, imageData, x, y, offset;
     
    canvas = $("#canvas")[0];
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
    
    context.putImageData(imageData, 0, 0);
    //automate();
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
    
    canvas = $("#canvas")[0];
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

    while(true){
        var v1 = Math.random(0.01, .5);
        var v2 = Math.random(0.01, .5);
        var v3 = Math.random(0.01, .5);    

        generate_new(v1, v2, v3);
    }
    
}