let sites = [
    {
        'name': 'Forside',
        'href': '../forside'
    },
    {
        'name': 'Ny booking',
        'href': '../booking'
    },
    {
        'name': 'Din bruger',
        'href': '../brugeren'
    },
];

function populateMenu() {
    let menuList = document.getElementById("menu");
    sites.forEach(function(site) {

        let aTag = document.createElement('a');
        aTag.setAttribute('href',site.href);
        aTag.innerText = site.name;
        aTag.classList.add('nav-link');

        let SiteItem = document.createElement("li");
        SiteItem.appendChild(aTag);
        menuList.appendChild(SiteItem);

    });

    let emailTag = document.getElementById('user-email');
    let LoggedInEmail = localStorage.getItem('e-mail');
    if (LoggedInEmail != null) {
        emailTag.innerText = localStorage.getItem('e-mail');
    } else {
        emailTag.innerText = "Du er ikke logget ind";
    }
}

populateMenu();