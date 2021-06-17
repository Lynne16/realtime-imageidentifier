function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
//createCapture is a built in function of p5.js which helps to access the webcam we need to pas the VIDEO parameter inside it
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S9VItLpwp/model.json',modelLoaded);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotResult);
}

function gotResult(error,results){
   if(error){
       console.error(error);   
    }
    else{
        console.log(results);
        document.getElementById('result_object_name').innerHTML=results[0].label;
        document.getElementById('result_accu').innerHTML=results[0].confidence.toFixed(3);
    }

}