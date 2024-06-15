import type { MetaFunction } from '@remix-run/node'
import HomePage from '~/pages/Homepage'

export const meta: MetaFunction = () => {
  return [{ title: 'Abel Blogs' }, { name: 'description', content: 'Welcome to my blog!' }]
}

export default function Index() {
  return (
    <div className="font-sans p-4">
      <HomePage />
    </div>
  )
}
