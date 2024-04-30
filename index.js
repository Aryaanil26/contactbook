const temp = document.getElementById('temp')
fetch('api.open-meteo.com/v1/forecast?latitude=9.5916&longitude=76.5222&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
.then(response => response.json())
.then(data => {
    const tempereature=data.current.temperature_2m
    temp.innerHTML=temp
})
.catch((error) => {
    console.log(error)
})