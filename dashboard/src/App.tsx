import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '@pet/utils'
import { Button } from 'ui'

function App() {
  const title = capitalizeFirstLetter('test my script')
  return (
    <>
      <p>{title}</p>
      <ChakraProvider value={defaultSystem}>
        <Button onClick={() => alert('Clicked!')}>Hello from UI</Button>
      </ChakraProvider>
    </>
  )
}

export default App
