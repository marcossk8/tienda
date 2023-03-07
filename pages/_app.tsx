import type { AppProps } from 'next/app'
import { CatalogProvider } from '@/context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CatalogProvider>
      <Component {...pageProps} />
    </CatalogProvider>
  )
}


// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { Provider } from 'react-redux';
// import { lightTheme } from '../themes';
// import { store } from '../app/store';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={lightTheme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </Provider>
//   );
// }

// export default MyApp;

