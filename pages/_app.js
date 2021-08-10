import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
 
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
const customTheme = extendTheme(
  
  withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Button", "Table"],
  }),
)


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider   theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp