import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { dark } from '@/styles/themes/dark'
import { light } from '@/styles/themes/light'
import GlobalStyles from '@/styles/global'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />

          <title>Boilerplate - NextJs/Typescript</title>
        </Head>
      </Head>
      <ThemeProvider theme={light || dark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
