ymaps.ready(function () {
    var myMap = new ymaps.Map('mapy', {
        center: [55.7886, 37.5892],
        zoom: 16,
        controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    });


    var myGeoObjects = [];

    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([55.7886, 37.5892],{
        balloonContentBody: 'Текст в балуне',
    },{
        iconLayout: 'default#image',
        // Путь до нашей картинки
        iconImageHref: 'img/ball.png',
        // Размер по ширине и высоте
        iconImageSize: [110, 54],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-55, -27]
    });

    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    myMap.behaviors.disable('scrollZoom');


    myMap.behaviors.disable('scrollZoom');



});
