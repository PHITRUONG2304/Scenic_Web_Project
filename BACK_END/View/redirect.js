function changePage(i) {
    var url = document.location.href;
    url += 'detail.html?id=' + encodeURIComponent(i);
    document.location.href = url;
}