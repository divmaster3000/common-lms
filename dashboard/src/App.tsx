import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from '@tanstack/react-router'
import { lightTheme } from 'ui'

import { router } from './route/root'

function App() {
  return (
    <>
      <ChakraProvider value={lightTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  )
}

export default App
