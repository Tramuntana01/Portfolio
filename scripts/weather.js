document.addEventListener('DOMContentLoaded', () => {
    const weatherElement = document.getElementById("weather");
    const timeElement = document.getElementById("weatherTime");
    
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=39.5694&longitude=2.6502&current_weather=true&hourly=temperature_2m&timezone=Europe/Madrid';

    weatherElement.textContent = "Cargando...";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const temperatura = Math.round(data.current_weather.temperature);
            const time = new Date().toLocaleTimeString('es-ES', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            weatherElement.innerHTML = `${temperatura}°C`;
            timeElement.textContent = time;
        })
        .catch(error => {
            console.error("Error en la API del clima:", error);
            weatherElement.textContent = `Error: ${error.message}`;
        });
});