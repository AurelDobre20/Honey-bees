var map = L.map('map');
map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var country= '';

map.on('click', async function(e) {
    const latlng = e.latlng;
    const lat = latlng.lat;
    const lng = latlng.lng;
    
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`);
    const data = await response.json();
    
    country = data.address.country;
    console.log(`Country: ${country}`);
    console.log(country);

    let countriesString = ['Austria', 'Belgium', 'Bulgaria','Cyprus','Czechia'
    ,'Denmark','Estonia','Finland','France','Germany',
    'Greece','Hungary','Ireland','Italy','Kosovo','Latvia','Lithuania'
    ,'Netherlands','Norway','Poland','Portugal','Romania',
    'Slovakia','Slovenia','Spain','Sweden','United Kingdom'
    ]

    const countries= {
        Austria: 367583,
        Belgium: 110000,
        Bulgaria: 613262,
        Cyprus: 40066,
        Czechia: 517300,
        Denmark: 170000 ,
        Estonia: 42000,
        Finland: 37500,
        France: 346575,
        Germany:680000 ,
        Greece: 1500000,
        Hungary: 995812,
        Ireland: 24000,
        Italy: 1127000,
        Kosovo: 70664,
        Latvia: 64133,
        Lithuania: 117977,
        Netherlands: 80000,
        Norway: 50000 ,
        Poland: 1122396,
        Portugal: 580065 ,
        Romania: 963342,
        Slovakia: 246214,
        Slovenia:  	2498003,
        Spain: 2498003,
        Sweden: 125000,
        UnitedKingom: 200000 
    }
    
    function checkInterval(no){
        let max = 2400000;
        let mid = 1400000;
        let min = 800000;
    
        if(no>max){
            return 'assests/greenBee.png';
        }
        if(no>mid && no<max){
            return 'assests/orangeBee.png';
        }
        if(no<mid && no>min){
            return 'assests/yellowBee.png';
        }
    
        if(no<min){
            return 'assests/redBee.png';
        }
    }

    let noHive = 0;
    

    for(let i = 0 ; i<27;i++){
        if(country===countriesString[i]){
            
            switch (i) {
                case 0:
                    noHive = countries.Austria;
                    break;
                case 1:
                    noHive = countries.Belgium;
                    break;
                case 2:
                    noHive = countries.Bulgaria;
                    break;
                case 3:
                    noHive = countries.Cyprus;
                    break;
                case 4:
                    noHive = countries.Czechia;
                    break;
                case 5:
                    noHive = countries.Denmark;
                    break;
                case 6:
                    noHive = countries.Estonia;
                    break;
                case 7:
                    noHive = countries.Finland;
                    break;
                case 8:
                    noHive = countries.France;
                    break;
                case 9:
                    noHive = countries.Germany;
                    break;
                case 10:
                    noHive = countries.Greece;
                    break;
                case 11:
                    noHive = countries.Hungary;
                    break;
                case 12:
                    noHive = countries.Ireland;
                    break;
                case 13:
                    noHive = countries.Italy;
                    break;
                case 14:
                    noHive = countries.Kosovo;
                    break;
                case 15:
                    noHive = countries.Latvia;
                    break;
                case 16:
                    noHive = countries.Lithuania;
                    break;
                case 17:
                    noHive = countries.Netherlands;
                    break;
                case 18:
                    noHive = countries.Norway;
                    break;
                case 19:
                    noHive = countries.Poland;
                    break;
                case 20:
                    noHive = countries.Portugal;
                    break;
                case 21:
                    noHive = countries.Romania;
                    break;
                case 22:
                    noHive = countries.Slovakia;
                    break;
                case 23:
                    noHive = countries.Slovenia;
                    break;
                case 24:
                    noHive = countries.Spain;
                    break;
                case 25:
                    noHive = countries.Sweden;
                    break;
                case 26:
                    noHive = countries.UnitedKingom;
                    
                   
            }
                    
        }
    }
    let g = checkInterval(noHive);
    console.log(g);

    var beeIcon = L.icon({
        
        iconUrl: checkInterval(noHive),
        
    
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });



    L.marker([lat, lng], {icon: beeIcon}).addTo(map);
    
  });


 