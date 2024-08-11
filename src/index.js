import './static/css/style.css';
import './static/css/booticon.css';
import { setWebsite, isFirstOpen, addWebsite } from './website';
import { openModelBox, closeModelBox } from './model';

var app = document.getElementById('app');
var time = document.getElementById('time');
var title = document.getElementById('title');
var yiyan = document.getElementById('yiyan');

async function setTitle() {
    while (true) {
        var date = new Date();
        var hours = date.getHours();
        if (hours >= 6 && hours < 12) {
            title.innerHTML = '<i class="bi bi-brightness-alt-high-fill"></i> Good morning';
        } else if (hours >= 12 && hours < 18) {
            title.innerHTML = '<i class="bi bi-brightness-high-fill"></i> Good afternoon';
        } else if (hours >= 18 && hours < 24) {
            title.innerHTML = '<i class="bi bi-cup-hot-fill"></i> Good evening';
        } else {
            title.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Good night';
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

function setYiyan() {
    /*fetch('https://v1.hitokoto.cn/?c=k')
        .then(response => response.json())
        .then(data => {
            yiyan.innerText = data.hitokoto;
        })
        .catch(console.error)*/
    yiyan.innerHTML = "很多事只是最初看起来有意义，但经过多次重复就慢慢失去了意义。";
}

async function setTime() {
    while (true) {
        var date = new Date();
        time.innerText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

function init() {
    setTitle();
    setYiyan();
    setTime();
    if (isFirstOpen()) {
        addWebsite('Google', 'https://www.google.com', 'bi bi-google');
        addWebsite('GitHub', 'https://github.com', 'bi bi-github');
        addWebsite('X', 'https://x.com', 'bi bi-twitter');
    }
    setWebsite();
    window.addWebsite = addWebsite;
    window.openModelBox = openModelBox;
    window.closeModelBox = closeModelBox;
}

init();