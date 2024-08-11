export function openModelBox() {
    var model = document.getElementById('model');
    model.style.display = 'flex';
    model.classList.remove('hide');
    model.classList.add('show');
}

export function closeModelBox() {
    var model = document.getElementById('model');
    model.classList.remove('show');
    model.classList.add('hide');
    setTimeout(() => {
        model.style.display = 'none';
    }, 300);
}

document.getElementById('add-website-button').onclick = function () {
    var name = document.getElementById('name').value;
    var url = document.getElementById('url').value;
    var icon = document.getElementById('icon').value;
    addWebsite(name, url, icon);
    closeModelBox();
}