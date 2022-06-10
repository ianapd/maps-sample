import { Box } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { Fragment } from "react";

export const MyMapComponent = ({ options }) => {
  const ref = useRef()
  const [map, setMap] = useState()
  const [marker, setMarker] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center: { lat: 14.7361110754, lng: 121.065602303 }, zoom: 16 }));
    }
  }, [ref, map])

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

  return (
    <Fragment>
      <Box h="500px" w="800px" ref={ref} />
    </Fragment>
  ) 
}