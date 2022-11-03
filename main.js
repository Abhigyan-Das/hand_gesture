prediction_1 = "";
prediction_2 = "";

Webcam.set ({
    width:350,
    height:300,
    img_format:'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_img" src ="'+data_uri+'"/>';
    });
    
}
console.log('ml5 version',ml5.version);
classifier = ml5.imgClassifier('https://teachablemachine.withgoogle.com/models/GH75pw1XP/model.json',modelLoaded);

function modelLoaded() {
    console.log('model loaded');
}
function speak() {
    img = document.getElementById('captured_img');
    classifier.classify(img, gotresult);
}