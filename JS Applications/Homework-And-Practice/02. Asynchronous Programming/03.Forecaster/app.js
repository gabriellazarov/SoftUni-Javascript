function attachEvents() {

    async function getWeather() {
        try {
            document.getElementById('forecast').style = '';

            let location = document.getElementById('location').value;

            let response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            let data = await response.json();

            let code;
            let flag = false;
            for (let obj of data) {
                if (obj.name == location) {
                    code = obj.code;
                    flag = true;
                    break;
                }
            }

            if (flag) {
                //current weather

                let todayResponse = await fetch('http://localhost:3030/jsonstore/forecaster/today/' + code);
                let todayData = await todayResponse.json();

                let todayDiv = document.createElement('div');
                todayDiv.classList.add('forecasts');

                let todaySymbol = document.createElement('span');
                todaySymbol.classList.add('condition');
                todaySymbol.classList.add('symbol');
                if (todayData.forecast.condition == 'Sunny') {
                    todaySymbol.textContent = '☀';
                } else if (todayData.forecast.condition == 'Partly sunny') {
                    todaySymbol.textContent = '⛅';
                } else if (todayData.forecast.condition == 'Overcast') {
                    todaySymbol.textContent = '☁';
                } else if (todayData.forecast.condition == 'Rain') {
                    todaySymbol.textContent = '☂';
                }
                todayDiv.appendChild(todaySymbol);

                let todayList = document.createElement('span');
                todayList.classList.add('condition');

                let todayLocationName = document.createElement('span');
                todayLocationName.classList.add('forecast-data');
                todayLocationName.textContent = todayData.name;
                todayList.appendChild(todayLocationName);

                let todayTemps = document.createElement('span');
                todayTemps.classList.add('forecast-data');
                todayTemps.textContent = todayData.forecast.low + '°/' + todayData.forecast.high + '°';
                todayList.appendChild(todayTemps);

                let todayCondition = document.createElement('span');
                todayCondition.classList.add('forecast-data');
                todayCondition.textContent = todayData.forecast.condition;
                todayList.appendChild(todayCondition);

                todayDiv.appendChild(todayList);

                document.getElementById('current').appendChild(todayDiv);




                //weather forecast

                let forecastResponse = await fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + code);
                let forecastData = await forecastResponse.json();

                let forecastDiv = document.createElement('div');
                forecastDiv.classList.add('forecast-info')

                for (let day of forecastData.forecast) {
                    let upcomingSpan = document.createElement('span');
                    upcomingSpan.classList.add('upcoming');

                    let currentSymbol = document.createElement('span');
                    currentSymbol.classList.add('symbol');
                    if (day.condition == 'Sunny') {
                        currentSymbol.textContent = '☀';
                    } else if (day.condition == 'Partly sunny') {
                        currentSymbol.textContent = '⛅';
                    } else if (day.condition == 'Overcast') {
                        currentSymbol.textContent = '☁';
                    } else if (day.condition == 'Rain') {
                        currentSymbol.textContent = '☂';
                    }
                    upcomingSpan.appendChild(currentSymbol);

                    let currentTemps = document.createElement('span');
                    currentTemps.classList.add('forecast-data');
                    currentTemps.textContent = day.low + '°/' + day.high + '°';
                    upcomingSpan.appendChild(currentTemps);
    
                    let currentCondition = document.createElement('span');
                    currentCondition.classList.add('forecast-data');
                    currentCondition.textContent = day.condition;
                    upcomingSpan.appendChild(currentCondition);

                    forecastDiv.appendChild(upcomingSpan);
                }

                document.getElementById('upcoming').appendChild(forecastDiv);
            }

            else document.getElementById('forecast').textContent = 'Error';

        } catch (error) {
            document.getElementById('forecast').textContent = 'Error';
        }
    }

    let button = document.getElementById('submit');
    button.addEventListener('click', getWeather);
}

attachEvents();
