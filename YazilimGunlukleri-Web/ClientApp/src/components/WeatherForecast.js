import React, { Component } from 'react';

export class WeatherForecast extends Component {
    displayName = WeatherForecast.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

      fetch('api/WeatherForecast/WeatherDetail')
      .then(response => response.json())
          .then(data => {
          console.log(data)
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table'>
        <thead>
            <tr>
                <th>Şehir</th>
                <th>Sıcaklık (°C)</th>
                <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
                  <td>{forecast.city}</td>
                  <td>{forecast.temp}</td>
                  <td>{forecast.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : WeatherForecast.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Hava durumu</h1>
        <p>Bu komponent hava durumunu gösterecek.</p>
        {contents}
      </div>
    );
  }
}
