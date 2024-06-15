import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useMatches,
  useRouteError,
} from '@remix-run/react'
import './tailwind.css'
import './styles/global-styles.scss'
import ErrorPage from './components/ErrorPage'
import NotFoundPage from './components/NotFoundPage'
import { Objectable } from './types'
import Layout from './components/Layout'

export function shouldRevalidate() {
  return false
}

export async function loader() {
  return json({ name: 'abel' })
}

export default function App() {
  const outletContext: Objectable = {
    name: 'Abel',
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout {...outletContext}>
          <Outlet context={outletContext} />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error: unknown = useRouteError()

  console.log('error', error)

  const [root] = useMatches()

  console.log('root ErrorBoundary', root)

  let page = undefined
  switch (error.status) {
    case 500:
      page = <ErrorPage error={error} />
      break

    default:
      page = <NotFoundPage error={error} />
      break
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>{page}</Layout>

        <Scripts />
      </body>
    </html>
  )
}
