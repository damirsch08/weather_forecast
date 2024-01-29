const belarusianCities = [
  'Homyel’',
  'Vitsyebsk',
  'Mahilyow',
  'Hrodna',
  'Brest',
  'Babruysk',
  'Baranavichy',
  'Barysaw',
  'Pinsk',
  'Mazyr',
  'Lida',
  'Salihorsk',
  'Navapolatsk',
  'Maladzyechna',
  'Polatsk',
  'Svyetlahorsk',
  'Slutsk',
  'Kobryn',
  'Slonim',
  'Vawkavysk',
  'Kalinkavichy',
  'Smarhon’',
  'Horki',
  'Asipovichy',
  'Dzyarzhynsk',
  'Byaroza',
  'Navahrudak',
  'Vilyeyka',
  'Krychaw',
  'Luninyets',
  'Mar’’ina',
  'Horka',
  'Pastavy',
  'Pruzhany',
  'Dobrush',
  'Hlybokaye',
  'Zaslawye',
  'Fanipal’',
  'Stowbtsy',
  'Ashmyany',
  'Ivanava',
  'Klimavichy',
  'Lahoysk',
  'Masty',
  'Drahichyn',
  'Astravyets',
  'Khoyniki',
  'Stolin',
  'Malaryta',
  'Haradok',
  'Lyuban’',
  'Klyetsk',
  'Byerazino',
  'Staryya',
  'Darohi',
  'Byelaazyorsk',
  'Uzda',
  'Baran’',
  'Kapyl’',
  'Mstsislaw',
  'Skidal’',
  'Byarozawka',
  'Valozhyn',
  'Pyetrykaw',
  'Byalynichy',
  'Talachyn',
  'Braslaw',
  'Buda-Kashalyova',
  'Krupki',
  'Vyetka',
  'Narowlya',
  'Kamyanyets',
  'Kirawsk',
  'Dzyatlava',
  'Slawharad',
  'Cherykaw',
  'Myory',
  'Kruhlaye',
  'Syanno',
  'Iwye',
  'Klichaw',
  'Myadzyel',
  'Vyerkhnyadzvinsk',
  'Dubrowna',
  'Svislach',
  'Davyd-Haradok',
  'Vysokaye',
  'Azyershchyna',
  'Kozyenki',
  'Vasilyevichy',
  'Turaw',
  'Hlushkavichy',
  'Babrovichy',
  'Vyalikiya', 
  'Chuchavichy',
  'Novy',
  'Svyerzhan’',
  'Kosava',
  'Vyalikiya',
  'Ramanavichy',
  'Dzisna',
  'Novaya',
  'Mysh',
  'Akhremawtsy',
  'Lakhva',
  'Khal’ch',
  'Nasilava',
  'Kavyerdzyaki',
  'Haradzyets',
  'Uza',
  'Salonaye',
  'Al’khowka',
  'Bronnaye',
  'Rudnya',
  'Andreyewshchyna',
  'Sloboda',
  'Tsishowka',
  'Lyubashava',
  'Zhodzina',
  'Pinsk',
  'Smalyavichy',
  'Zhlobin',
  'Nyasvizh',
  'Krychaw',
  'Kobryn',
  'Rechytsa',
  'Zhabinka',
  'Rahachow',
  'Luninyets',
  'Vyalikaya',
  'Byerastavitsa',
  'Chashniki',
  'Shchuchyn',
  'Lyakhavichy',
  'Voranava',
  'Ivatsevichy',
  'Hantsavichy',
  'Drybin',
  'Shklow',
  'Orsha',
  'Kastsyukovichy',
  'Karma',
  'Sharkawshchyna',
  'Bykhaw',
  'Chachersk',
  'Zhytkavichy',
  'Loyew',
  'Khotsimsk',
  'Chavusy',
  'Yel’sk',
  'Lyozna',
  'Hlusk',
  'Dokshytsy',
  'Aktsyabrski',
  'Krasnapollye',
  'Lyel’chytsy',
  'Brahin',
  'Rasony',
]

const content = document.querySelector('.container');
const dateBlock = document.querySelector('.date');
const list = document.querySelector('.list');
const currentWeatherBlock = document.querySelector('.current-weather');
let arrayOfTemperature;
let selected = 'Minsk';
const date = new Date;

let dd = date.getDate();
if (dd < 10) dd = '0' + dd;
let mm = date.getMonth() + 1;
if (mm < 10) mm = '0' + mm;
let currentDate = date.getFullYear() + '-' + mm + '-' + dd + ' ' + new Date().toLocaleTimeString().slice(0, -3);

for(let i = 0; i < belarusianCities.length; i++){
	const option = document.createElement('option');
	option.innerHTML = belarusianCities[i];
	list.append(option);
}

async function app(){
	const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4a3c18b4927f40f2bd2145138220507&q=${selected}&aqi=no`);
	const data = await response.json();
	console.log(data);
	const forecast = data.forecast;
	const forecastDay = forecast.forecastday;
	for(let i = 0; i < forecastDay.length; i++){
    for(let r = 0; r < forecastDay[i].hour.length; r++){
			const forecastHour = forecastDay[i].hour[r];
      const div = document.createElement('div');
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const div3 = document.createElement('div');      
      div.className = 'temperature';
      let target = true;
      div.addEventListener('click', () => {
        target = !target;
        div3.style.display = target ? 'none' : 'block';
      });
      div1.innerHTML = forecastHour.time.substring(10);
      div1.className = 'forecast__time'
      div2.innerHTML = Math.round(forecastHour.temp_c) + '°C';
      div3.className = 'wind__speed';
      div3.innerHTML = Math.round(forecastHour.wind_kph) + 'kph';
      content.append(div);
      div.append(div1, div2, div3);
      arrayOfTemperature = document.querySelectorAll('.temperature');
      if(forecastHour.time < currentDate){
        arrayOfTemperature[r].style.display = 'none';
      }
      if(forecastHour.chance_of_rain >= 50 && forecastHour.chance_of_rain <= 75){
        arrayOfTemperature[r].style.color = 'rgb(157, 206, 255)';
        arrayOfTemperature[r].style.backgroundImage = 'url(../%23Weather/img/Patchy%20rain%20possible.svg)';
      }
      if(forecastHour.chance_of_rain > 75){
        arrayOfTemperature[r].style.color = 'rgb(120, 155, 189)';
        arrayOfTemperature[r].style.backgroundImage = 'url(../%23Weather/img/Light%20rain.svg)';
      }
      function updateCurrentTime(){
        currentDate = date.getFullYear() + '-' + mm + '-' + dd + ' ' + new Date().toLocaleTimeString().slice(0, -3);
        setTimeout(updateCurrentTime, 10000);
      }
      updateCurrentTime();
      const currentCondition = data.current.condition;
      document.querySelector('.condition__text').innerHTML = currentCondition.text;
      const conditionImg = document.querySelector('.condition__img')
      conditionImg.src = `../%23Weather/img/${currentCondition.text}.svg`;
      if(currentCondition.text == 'Light rain shower'){
        conditionImg.src = `../%23Weather/img/Light rain.svg`;
      }
      currentWeatherBlock.innerHTML = Math.floor(data.current.temp_c) + '°C';
		}
		dateBlock.innerHTML = forecastDay[i].date;
	}
  document.querySelector('.condition__deg').innerHTML = Math.floor(data.current.feelslike_c) + '°C';
}
app();

list.addEventListener('change', () => {
	selected = list.selectedOptions[0].innerHTML;
  content.innerHTML = '';
	app();
});