Webcam.set({

    height:350,
    width:350,
    image_format: 'png',
    png_quality: 90

})

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture(){

    Webcam.snap();

}

console.log("ml5.version" , ml5.version);

classifier = ml5.imageclassify("https://teachablemachine.withgoogle.com/models/TPnlkz3pJ/model.json");