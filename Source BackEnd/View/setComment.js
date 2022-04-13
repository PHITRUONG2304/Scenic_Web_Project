var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        
    }
}
xhttp.open("POST", "../Source BackEnd/Controller/SetAction.php")
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send()