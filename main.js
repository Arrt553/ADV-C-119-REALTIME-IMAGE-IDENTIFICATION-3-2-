function setup(){
    canvas = createCanvas(400,390);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QOXZOWcNA/model.json",modelLoaded);
}
function draw(){
    image(video,0,0,400,390);
    classifier.classify(video,gotResults);
}
 function gotResults(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("results_object_name").innerHTML = results[0].label;
         document.getElementById("result_object_accuracy").innerHTML = results[0].label.confidence.toFixed(2);
     }
 }
 function modelLoaded(){
     console.log("model is Loaded!");
 }    
function preload(){

}
