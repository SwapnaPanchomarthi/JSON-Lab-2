var request = new XMLHttpRequest();


request.onreadystatechange = function (){

    if((request.status == 200) && (request.readyState ==4)) {
        var test = JSON.parse(request.responseText)

        console.log(test)
        var movies = "";


        for (idx in test.data) {
            var movie = test.data[idx]
            console.log(movie)
            if (movie[10] == "Golden Gate Bridge") {
                movies += movie[8] + "<br>"
                movies+=movie[9]+"<br>"
                movies+=movie[13]+"<br>"
                movies+="<br>"
                // made in " + movie[9] + " and produced by " + movie[13] + "<br/>";
            }
        }

        var result = document.getElementById("result").innerHTML += movies;
        //console.log(movies);
    }
};
request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.send();