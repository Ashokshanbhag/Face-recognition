Webcam.set({

    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90

});

camera = document.getElementById("webcam");
Webcam.attach("webcam");

function takeImage(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';

    });

}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J3wKNcBcv/model.json', modelLoaded);

function modelLoaded(){

    console.log("its a model loaded");

}
function identifyImage(){

    image = document.getElementById("captured_image");
    classifier.classify(image,gotResult);

}

function gotResult(error,results){

    if(error){

        console.log("The Is an error" + error);

    }
    else{

        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);

    }

}