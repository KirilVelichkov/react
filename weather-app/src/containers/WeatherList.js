import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component {

    renderWeather(cityData) {
        let name = cityData.city.name;
        let temperatures = cityData.list.map(weather => weather.main.temp);
        let pressures = cityData.list.map(weather => weather.main.pressure);
        let himidities = cityData.list.map(weather => weather.main.humidity);
        let { lat, lon } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart height={120} width={180} data={temperatures} color="blue" />
                </td>
                <td>
                    <Chart height={120} width={180} data={pressures} color="orange" />
                </td>
                <td>
                    <Chart height={120} width={180} data={himidities} color="red" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}


export default connect(mapStateToProps)(WeatherList);