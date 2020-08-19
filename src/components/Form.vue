<template>
  <div>
    <b-container class="mt-5" >
      <b-card border-variant="info" bg-variant="light" > 
     <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
            <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }} °c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    
  </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
        api_key: "355cc4da18d629fd95a0fa828a8b382a",
       url_base: "https://api.openweathermap.org/data/2.5/",
     query:"",
     weather: {}
    }
      },
  methods: { 
       fetchWeather (e) {
        if (e.key == "Enter") {
          fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
      }
  
    },
    
setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }

  },
};
</script>

<style></style>
