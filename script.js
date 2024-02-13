document.getElementById('foglalasok-gomb').onclick = function () {
    var xhr = new XMLHttpRequest()


    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var adat = JSON.parse(xhr.responseText)
            console.log(adat)
        }


    }

    xhr.open('GET', 'http://localhost:3000/foglalasok')
    //valamiért nem mutatja a konzol a json adatokat
    //pedig a linken látom a json adatokat
    
       xhr.send()
}



//táblázat előkészítve html ben

foglalasok-listaja.sort((a, b) => new Date(b.datum) - new Date(a.datum));


// 3/c nem