document.getElementById('termo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        pesquisar();
    }
});

function pesquisar() {
    var selectSite = document.getElementById('select-site');
    var site = selectSite.options[selectSite.selectedIndex].value;
    var termo = encodeURIComponent(document.getElementById('termo').value);
    var url = '';

    switch (site) {
        case 'google':
            url = 'https://www.google.com/search?q=' + termo;
            break;
        case 'youtube':
            url = 'https://www.youtube.com/results?search_query=' + termo;
            break;
        case 'spotify':
            url = 'https://open.spotify.com/search/' + termo;
            break;
        case 'instagram':
            url = 'https://www.instagram.com/' + termo + '/';
            break;
        case 'facebook':
            url = 'https://www.facebook.com/search/top?q=' + termo;
            break;
        default:
            break;
    }

    window.open(url, '_blank');
}

function alterarTema() {
    var selectSite = document.getElementById('select-site');
    var site = selectSite.options[selectSite.selectedIndex].value;
    var body = document.body;

    body.setAttribute('data-site', site);
}
