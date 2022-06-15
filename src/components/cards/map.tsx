import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Location } from '../../types'

type Props = {
  locations: Location[]
}

export default function Map({ locations }: Props) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    // The latitude and longitude of the center of London
    latitude: 38.388068525137896,
    longitude: -97.77192419051444,
    zoom: 3,
  })

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    >
      {locations.map((location: Location) => (
        <div key={location._id}>
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <span role='img' aria-label='push-pin'>
              📌
            </span>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  )
}
