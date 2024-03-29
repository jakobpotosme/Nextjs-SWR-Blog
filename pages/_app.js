import '../styles/globals.css'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
  return (<SWRConfig
        value={{ 
            refreshInterval: 5000,
          }}
        >
    <Component {...pageProps} />
  </SWRConfig>)
}

export default MyApp
