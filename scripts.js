var addButton = document.getElementById('addElem'),
    list = document.getElementById('list');

addButton.addEventListener('click', function () {
    var item = document.createElement('li'),
        count = document.getElementsByTagName('li');
    console.log(count.length);
    item.innerHTML = 'item '+(count.length);
    list.appendChild(item);
});

