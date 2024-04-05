var request = new XMLHttpRequest()
request.open('GET','https://restcountries.com/v3.1/all');
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result)

for(var i in result){
    var element = document.createElement('p');
    element.setAttribute('class','area'),
    element.innerHTML = `area : ${result[i].area}`

    var image = document.createElement('img');
    image.setAttribute('src',result[i].flags.png)

    document.body.append(element, image)
}
}







