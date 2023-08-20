import * as React from 'react';
import { Box, Button, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import TestimonialSettingsWrapper from './components/page/testimonial-views/testimonialSettingsWrapper';
import TestimonialListWrapper from './components/page/testimonial-list/testimonialListWrapper';

function App() {
  
  const [selectedView, setSelectedView] = React.useState('');

  const renderView = () => {
    
    if(selectedView === 'testimonialLists') {return (<TestimonialListWrapper />)};

    if(selectedView === 'testimonialSettings') {return (<TestimonialSettingsWrapper />)};

    if(selectedView === '') {
      return(
        <Box display={"flex"} textAlign={"center"} m="50px auto" alignItems={"center"} justifyContent={"center"}>
          <Button onClick={ (e) => setSelectedView('testimonialLists') }  m="20px">Testomonial List</Button>
          <Button onClick={ (e) => setSelectedView('testimonialSettings') }  m="20px">Testomonial View Settings</Button>
        </Box>
      )
    }
    


  }

  return (
    <ChakraProvider>
      <ColorModeProvider>
        {
          renderView()
        }
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
