function getContent() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText)
            console.log(jsonData[1].NameContent)
        }
    }
    xhttp.open("GET", "../Controller/GetAction.php?action=getContent")
    xhttp.send()
}

getContent()

// AJAX 