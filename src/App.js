import * as React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Wrapper from './components/page/testimonial-views/wrapper';

function App() {
  return (
    <ChakraProvider>
      <ColorModeProvider>
        <Wrapper />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
