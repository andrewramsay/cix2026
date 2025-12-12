window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        L.Icon.Default.imagePath = '{{ site.baseurl }}/assets/images/leaflet/';
        map = L.map(elId).setView(config.home_coord, config.default_zoom);

        L.tileLayer.provider(config.map_provider).addTo(map);

        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);


        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);

        // locations to show as map markers
        const locations = [
            {
                lat: 55.865534000615945,
                lon: -4.251593707697684,
                name: "Buchanan St. Bus Station",
            },
            {
                lat: 55.884647,
                lon: -4.296251,
                name: "Queen Margaret Residences (Accomodation)",
            },
            {
                lat: 55.8739595,
                lon: -4.2917625,
                name: "Sir Alwyn Williams Building",
            },
            {
                lat: 55.8752271,
                lon: -4.2934618,
                name: "Hillhead Underground station",
            },
            {
                lat: 55.8698525,
                lon: -4.3087712,
                name: "Partick Rail/Underground station",
            },
            {
                lat: 55.8591396,
                lon: -4.2581681,
                name: "Glasgow Central Station",
            },
            {
                lat: 55.862449,
                lon: -4.2512038,
                name: "Glasgow Queen Street Station",
            },
            {
                lat: 55.5098091,
                lon: -4.5948636,
                name: "Glasgow Prestwick Airport",
            },
            {
                lat: 55.8700415,
                lon: -4.4371129,
                name: "Glasgow Airport",
            },
            {
                lat: 55.9471784,
                lon: -3.3607946,
                name: "Edinburgh Airport",
            }
        ];

        locations.forEach(location => {
            let marker = L.marker([location.lat, location.lon], {
                title: location.name,
                alt: location.name,
                zIndexOffset: 1000,
                opacity: 1.0,
            }).addTo(map);
            marker.bindPopup(location.name);
        });
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();
