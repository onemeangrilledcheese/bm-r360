import App from "next/app"
import Head from "next/head"
import ErrorPage from "next/error"
import { useState, useEffect } from "react"
import { Router } from 'next/dist/client/router'
import { DefaultSeo } from "next-seo"
import { getStrapiMedia } from "utils/media"
import { getGlobalData } from "utils/api"
import "@/styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  // Extract the data we need
  const { global } = pageProps
  const [isLoading, setLoading] = useState(false)

  // useEffect(() =>{
  //   setLoading(true)
  // }, [])

  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  //@todo decide how we want to transition to new page
  Router.events.on('routeChangeStart', () => {
    console.log('routeChangeStart')
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    console.log('routeChangeComplete')
    setLoading(false)
  })
  Router.events.on('routeChangeError', () => {
    console.log('routeChangeError')
  })

  const { metadata, favicon, metaTitleSuffix } = global.attributes

  return (
    <>
      {/* Favicon */}
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(favicon.data.attributes.url)}
        />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${metaTitleSuffix}`}
        title="Page"
        description={metadata.metaDescription}
        openGraph={{
          images: Object.values(
            metadata.shareImage.data.attributes.formats
          ).map((image) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            }
          }),
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      {/* Display the content */}
      {isLoading && <h1>Loading... we need anim here</h1>}
      {!isLoading && <Component {...pageProps} />}
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const globalLocale = await getGlobalData(appContext.router.locale)

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  }
}

export default MyApp
