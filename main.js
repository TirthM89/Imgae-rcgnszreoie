//https://teachablemachine.withgoogle.com/models/nd5lp1Iqg/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img  id='captured_image' src='"+data_uri+"'/>";
        
    });
}

console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nd5lp1Iqg/model.json",modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}