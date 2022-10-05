import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './redux';

import { Layout } from '@/layout';

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <ChakraProvider>
          <Layout />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
