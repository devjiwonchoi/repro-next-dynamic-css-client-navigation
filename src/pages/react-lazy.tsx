import { lazy, Suspense } from 'react'
import Link from 'next/link'

const ReactDynamicRedButton = lazy(() =>
  import('../components/red-button').then((module) => ({
    default: module.RedButton,
  }))
)

export default function ReactDynamic() {
  return (
    <Suspense fallback={null}>
      <ReactDynamicRedButton />
      <Link href="/no-red-button">/no-red-button</Link>
    </Suspense>
  )
}
