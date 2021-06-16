using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using YazilimGunlukleri_Web.Models;

namespace YazilimGunlukleri_Web.Controllers
{
    [Route("api/[controller]")]
    public class WeatherForecastController : Controller
    {
        [HttpGet("[action]")]
        public List<WeatherViewModel> WeatherDetail()
        {
            string[] cities = { "OSLO", "TRONDHEIM", "ANKARA", "ISTANBUL" };

            var weathersInfo = new List<WeatherViewModel>();

            foreach (var city in cities)
            {
                weathersInfo.Add(GetWeatherInformation(city));
            }
            return weathersInfo.ToList();
        }
        public void HandleDeserializationError(object sender, ErrorEventArgs errorArgs)
        {
            var currentError = errorArgs.ErrorContext.Error.Message;
            errorArgs.ErrorContext.Handled = true;
        }

        [HttpGet("[action]")]
        public WeatherViewModel GetWeatherInformation(string city)
        {
            string appId = "8113fcc5a7494b0518bd91ef3acc074f";
            string url = string.Format("http://api.openweathermap.org/data/2.5/weather?q={0}&units=metric&cnt=1&APPID={1}", city, appId);

            using (WebClient client = new WebClient())
            {
                string json = client.DownloadString(url);
                var weatherInfo = JsonConvert.DeserializeObject<RootObject>(json, new JsonSerializerSettings
                {
                    Error = HandleDeserializationError
                });
                Console.WriteLine("XXXXXXX");
                Console.WriteLine(weatherInfo.name);

                return new WeatherViewModel
                {
                    City = weatherInfo.name,
                    Description = weatherInfo.weather[0].description,
                    Temp = Convert.ToString((int)weatherInfo.main.temp)
                };
            }
        }
    }
}
