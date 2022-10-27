
let showData = document.getElementById('showData');
let myReq = new Request('./data.json');

fetch(myReq)
    .then(function(resp){
        return resp.json();
    })
    .then(function(theData){
        let myData = theData.myArr;
        console.log(myData);
        myData.forEach(function (element,index) {
            console.log(element.display + " & " + element.url); 
            showData.innerHTML += `
            <tr>
                <td>${index+1}</td>
                <td>${element.display}</td>
                <td>${element.URL}</td>
                <td>Visit <a href="${element.URL}">${element.display}</a></td>
            </tr>
            `           
        });
    })