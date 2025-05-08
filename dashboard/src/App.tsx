import { ChakraProvider } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '@pet/utils'
import { Button, lightTheme } from 'ui'

function App() {
  const title = capitalizeFirstLetter('test my script')
  return (
    <>
      <p>{title}</p>
      <ChakraProvider value={lightTheme}>
        <Button onClick={() => alert('Clicked!')}>Hello from UI</Button>
      </ChakraProvider>
    </>
  )
}

export default App
