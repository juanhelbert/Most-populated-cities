import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import './App.css'

const citiesData = {
  "features": [
    {
      "properties": {
        "city_ID": 1,
        "city_name": "Rosario",
        "residents": "1 307 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-60.666504, -32.953368]
      }
    },
    {
      "properties": {
        "city_ID": 2,
        "city_name": "Córdoba",
        "residents": "1 488 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-64.182129, -31.391158]
      }
    },
    {
      "properties": {
        "city_ID": 3,
        "city_name": "Buenos Aires",
        "residents": "3 108 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-58.436279, -34.606085]
      }
    },
    {
      "properties": {
        "city_ID": 4,
        "city_name": "La Plata",
        "residents": "743 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-57.963867, -34.921971]
      }
    },
    {
      "properties": {
        "city_ID": 5,
        "city_name": "Mar del Plata",
        "residents": "670 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-57.546387, -38.022131]
      }
    },
    {
      "properties": {
        "city_ID": 6,
        "city_name": "Salta",
        "residents": "640 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-65.43457, -24.766785]
      }
    },
    {
      "properties": {
        "city_ID": 7,
        "city_name": "San Miguel de Tucumán",
        "residents": "608 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-65.214844, -26.863281]
      }
    },
    {
      "properties": {
        "city_ID": 8,
        "city_name": "Santa Fe",
        "residents": "593 000 residents"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-60.710449, -31.634676]
      }
    }
  ]
}

const pointerIcon = new Icon({
  iconUrl: "https://image.flaticon.com/icons/svg/526/526780.svg",
  iconSize: [25, 25]
});

function App() {
  const [activePark, setActivePark] = useState(null);

  return (
    <div classcity_name="App">
      <Map center={[-35, -60]} zoom={5}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/juanh/ck9ddac3f0bl41in160bzge1b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVhbmgiLCJhIjoiY2s5ZGQzN3ZkMDJpMTNnczYzbWFjdXA5OSJ9.jQrUYGpW9ubb4XMUGe1bMQ"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {citiesData.features.map(park => (
          <Marker
            icon={pointerIcon}
            key={park.properties.city_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0]
            ]}
            onClick={() => {
              setActivePark(park);
            }}
          />
        ))}
        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0]
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.city_name}</h2>
              <p>{activePark.properties.residents}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default App;
