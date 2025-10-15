import React, { useEffect,useState } from "react"


function Ui(){
 const [weather,setweather]= useState()
 const [cityname,setcity] = useState("")  
 const [theme,settheme]= useState("light")
    const city = 'Karachi'
    const key = "bba9840ae43fabf107976d367fb78a46"
    useEffect(()=>{
async function call(){
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname ? cityname : city }&appid=${key.trim()}&units=metric`) 
    const data =await api.json()
setweather(data)
}
call()

    },[cityname])

    function handle(e){
        setcity(e.target.value)
    }

function Theme(e){
 settheme(theme === "light" ? "dark" : "light");
}


    return(
        <>
            <div className="head">
                <div className="h1"><h1>Weather App</h1></div>
                
                    <div className="btn">

<label className="switch">
  <input id="input" type="checkbox" onChange={Theme} />
  <div className="slider round">
    <div className="sun-moon">
      <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>

      <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
    </div>
    <div className="stars">
      <svg id="star-1" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-2" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-3" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
      <svg id="star-4" className="star" viewBox="0 0 20 20">
        <path
          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
        ></path>
      </svg>
    </div>
  </div>
</label>

              </div>
                </div>
           
        <div className={theme === "light" ? "light-mode" : "dark-mode"}>
            <div className="child" >
              
                <div className="imgmain">
                    <div className="imge">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/854/797/small_2x/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
                       
                    </div>
                </div>
              {weather && weather.main ? (
                <>
                <h1>{cityname ? cityname : city} : {Math.round(weather.main.temp)} °C </h1>
                 <ul className="weather-list">
      <li>🌡 Feels Like: {Math.round(weather.main.feels_like)} °C</li>
      <li>💧 Humidity: {weather.main.humidity}%</li>
   

      <li>☁ Condition: {weather.weather[0].description}</li>
     
    </ul>
                </>
          ) : (
            <p className="loader">Loading...</p>
          )}

         <div className="in">
           <select name="myDropdown" className="list" id="myDropdown" onChange={handle}>
  <option  disabled selected>Select City</option>
  <option  value="Islamabad" >Islamabad</option>
  <option value="Lahore" >Lahore</option>
    <option  value="Karachi" >Karachi</option>
   <option value="Punjab" >Punjab</option>
    <option value="Multan" >Multan</option>
     <option value="Faisalabad" >Faisalabad</option>
</select>
<br />

         </div>


         {/* list */}

            </div>
        </div>
        </>
    )
}

export default Ui