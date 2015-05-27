    var offset_1 = 0.01;
    var offset_2 = 0.02;
    var offset_3 = 0.04;


$(function generate() {
    var canvas, context, image, imageData, x, y, offset;
     
    canvas = $("#canvas")[0];
    context = canvas.getContext("2d");

    var results_box = document.getElementById('output');
    results_box.innerHTML = "lets see if this is working";
 
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
});

function do_things(){

    offset_1 = document.getElementById('offsetBox_1');
    offset_2 = document.getElementById('offsetBox_2');
    offset_3 = document.getElementById('offsetBox_3');

    offset_1 = offset_1.value;
    offset_2 = offset_2.value;
    offset_3 = offset_3.value;

    var results_box = document.getElementById('output');
    results_box.innerHTML = "offset_1 is " +offset_1 +" offset_2 is " 
    +offset_2 +" offset_3 is " +offset_3;

/*
    var val = $('#slider_1').slider("option", "value");
    $("#output_1").text(val.value);
    alert(val.value);

    */

    generate_new();


}

function generate_new(){

    var canvas, context, image, imageData, x, y, offset;
     
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
}

/*
$(function() {
    $( "#slider_1").slider({
        range: "min",
        min: .01,
        max: 1,
        step: .01
        //slide: function(event, ui){
           // alert(ui.value);
            //$("#output_1").text(ui.value);
           // }
        });

    $( "#slider_2").slider({
        range: "min",
        min: .01,
        max: 1,
        step: .01
        });

    $( "#slider_3").slider({
        range: "min",
        min: .01,
        max: 1,
        step: .01
        });

    



    

  });
*/