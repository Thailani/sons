//https://teachablemachine.withgoogle.com/models/bcJEcD_vN/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bcJEcD_vN/model.json', modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}

function gotResults(error, results) {
if (error) {  
    console.log('got results');
} else {
    console.log(results);
    ramdom_number_r = Math.floor(Math.random() * 255) +1;
    ramdom_number_g = Math.floor(Math.random() * 255) +1;
    ramdom_number_b = Math.floor(Math.random() * 255) +1;

    document.getElementById("result_label").innerHTMl = 'Posso ouvir - '+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_r+")";

    img = document.getElementById('alien1')
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "Palmas") {
        img.src = 'aliens-01.gif';
        img.src = 'aliens-02.png';
        img.src = 'aliens-03.png';
        img.src = 'aliens-04.png';
    }

    else if (results[0].label == "Apito") {
        img.src = 'aliens-01.png';
        img.src = 'aliens-02.gif';
        img.src = 'aliens-03.png';
        img.src = 'aliens-04.png';
    }

    else if (results[0].label == "Estralar de Dedo"){
        img.src = 'aliens-01.png';
        img.src = 'aliens-02.png';
        img.src = 'aliens-03.gif';
        img.src = 'aliens-04.png';
    }

    else {
        img.src = 'aliens-01.png';
        img.src = 'aliens-02.png';
        img.src = 'aliens-03.png';
        img.src = 'aliens-04.gif';
    }
}

}