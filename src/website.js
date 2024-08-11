var website = document.getElementById('website');

export function isFirstOpen() {
    var cookie = document.cookie;
    if (cookie != "") {
        var cookies = cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].split("=");
            if (cookie[0].trim() == "isfirst") {
                if (cookie[1] == "true") return false;
                break;
            }
        }
    }
    document.cookie = `isfirst=true`;
    return true;
}

export function getWebsites() {
    var cookie = document.cookie;
    var websites = [];
    if (cookie != "") {
        var cookies = cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].split("=");
            if (cookie[0].trim() == "websites") {
                websites = JSON.parse(cookie[1]);
                break;
            }
        }
    }
    return websites;
}

export function setWebsite() {
    var cookie = document.cookie;
    var websites = getWebsites();

    website.innerHTML = websites.map(website => {
        return `<div class="card" onclick="window.open('${website.url}')"><i class="${website.icon}"></i><h3>${website.name}</h3></div>`
    }).join('');

    website.innerHTML += `<div class="card" onclick="openModelBox();">
        <i class="bi bi-plus-square-fill"></i>
        <h3>Add</h3>
    </div>`;
}

export function addWebsite(name, url, icon) {
    var websites = getWebsites();
    websites.push({ name: name, url: url, icon: icon });
    document.cookie = `websites=${JSON.stringify(websites)}`;
    setWebsite();
}

export function deleteWebsite(name) {
    var websites = getWebsites();
    websites = websites.filter(website => website.name != name);
    document.cookie = `websites=${JSON.stringify(websites)}`;
    setWebsite();
}
