import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { mapStyles } from '../utils';
const AnyReactComponent = ({ text }) => <div className="pointer"><i className="fa fa-map-marker"></i></div>;

export default class Map extends Component {
    static mapOptions = {
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }] // straight out of something like snazzymaps
    };
    static defaultProps = {
        center: { lat: 47.073729, lng: 27.431595 },
        zoom: 6,
        styles: mapStyles,
        defaultOptions: this.mapOptions
    }



    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCxTTXT3XyYt1MMy10Y7yBEzMiNbd1b7Eo" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    styles={mapStyles}
                    options={{ styles: mapStyles }}
                >
                    <AnyReactComponent
                        lat={47.073729}
                        lng={27.431595}
                        text={'Restaurant'}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}