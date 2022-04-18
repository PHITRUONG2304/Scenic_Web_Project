function changePage(i) {
    var url = document.location.href;
    url += 'content_details.html?id=' + encodeURIComponent(i);
    document.location.href = url;
}