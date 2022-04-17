window.onload = function () {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText)
            
        }
    }
    xhttp.open("GET", "../BACK_END/Controller/GetAction.php?action=getContentForMain")
    xhttp.send()
}