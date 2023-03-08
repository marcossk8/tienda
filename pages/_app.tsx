import type { AppProps } from "next/app"
import { CatalogProvider } from "@/context"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes";
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CatalogProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CatalogProvider>
  )
}