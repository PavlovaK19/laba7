function createMap(eventsData) {
  // Замените 'YOUR_API_KEY' на ваш API-ключ от Яндекс.Карт
  ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.75, 37.62],
        zoom: 13,
        controls: ['zoomControl']
    });
    
    function addMarkers(filteredEvents) {
      myMap.geoObjects.removeAll(); // Очищаем карту от предыдущих маркеров
      filteredEvents.forEach(event => {
        const marker = new ymaps.Placemark([event.широта, event.долгота], {
          balloonContent: `<h3>${event.название}</h3><p>Дата: ${event.дата}<br>Тип: ${event.тип}</p>`
        });
        myMap.geoObjects.add(marker);
      });
    }

    function filterEvents() {
      const dateFilterValue = document.getElementById('dateFilter').value;
      const typeFilterValue = document.getElementById('typeFilter').value;

      const filtered = eventsData.filter(event => {
        const dateMatch = !dateFilterValue || new Date(event.дата) >= new Date(dateFilterValue);
        const typeMatch = !typeFilterValue || event.тип === typeFilterValue;
        return dateMatch && typeMatch;
      });
      addMarkers(filtered);
    }

    const dateInput = document.getElementById('dateFilter');
    dateInput.addEventListener('change', filterEvents);

    const typeInput = document.getElementById('typeFilter');
    typeInput.addEventListener('change', filterEvents);

    addMarkers(eventsData);
  }
}

const events = [
  { название: "УТРО", широта: 55.7558, долгота: 37.6173, дата: "2024-04-15", тип: "Производство" },
  { название: "МедиаДвиж", широта: 55.76, долгота: 37.63, дата: "2024-05-22", тип: "Медиа" },
  { название: "ШУМ", широта: 55.77, долгота: 37.64, дата: "2024-03-10", тип: "Медиа" },
  { название: "Таврида.АРТ", широта: 55.75, долгота: 37.61, дата: "2024-10-01", тип: "Культура" },
];

createMap(events);

