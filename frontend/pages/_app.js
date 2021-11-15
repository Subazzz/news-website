import '../styles/globals.css'
import {wrapper} from '../redux/store'
import Layout from '../component/Layout'
function MyApp({ Component, pageProps }) {
  return( 
  <><Component {...pageProps} /></>
  )}

export default wrapper.withRedux(MyApp)
