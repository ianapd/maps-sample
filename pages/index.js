import { Box, Spinner } from '@chakra-ui/react'
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { Marker } from './components/Marker';
import { MyMapComponent } from './components/MyMapComponent';

export default function Home() {

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />
      case Status.SUCCESS:
        return <MyMapComponent />
    }
  }

  return (
    <Box>
      <Wrapper apiKey='AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I' render={render}>
        <MyMapComponent>
          <Marker position={{ lat: 14.7361110754, lng: 121.065602303 }} />
        </MyMapComponent>
      </Wrapper>
    </Box>
  )
}
