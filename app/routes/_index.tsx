import { LoaderFunctionArgs, json, type MetaFunction } from '@remix-run/node'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import transformPageTitle from '~/helper/transformPageTitle'
import HomePage from '~/pages/Homepage'

export const meta: MetaFunction = ({ data }: { data: unknown }) => {
  return [{ title: transformPageTitle(data?.page?.title) }]
}

export const loader = async ({ params, request, context }: LoaderFunctionArgs) => {
  return json({ page: { title: 'Home page' }, params, request, context })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  const { setNotify: notify } = useOutletContext<unknown>()

  const handleShowNotify = () => {
    notify({
      message: 'thanh cong roi, chuc mung ban nhe',
      status: 'success',
    })
  }

  return (
    <div className="font-sans p-4">
      <HomePage />

      <button onClick={() => handleShowNotify()}>Click</button>
    </div>
  )
}
