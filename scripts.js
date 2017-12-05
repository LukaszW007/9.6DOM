var addButton = document.getElementById('addElem'),
    list = document.getElementById('list');


addButton.addEventListener('click', function () {
    var item = document.createElement('li'),
        count = document.getElementsByTagName('li');
    item.innerHTML = 'item '+(count.length+1);
    list.appendChild(item);
});

