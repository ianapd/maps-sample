import { useState, useEffect } from "react";
import MarkerClusterer from "@googlemaps/markerclustererplus"

export const Marker = (options) => {
  const [marker, setMarker] = useState()

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])
  
  new MarkerClusterer(map, marker, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  })

  return null
}