import dynamic from 'next/dynamic'
import Link from 'next/link'

const NextDynamicRedButton = dynamic(() =>
  import('../components/red-button').then((module) => module.RedButton)
)

export default function NextDynamic() {
  return (
    <>
      <NextDynamicRedButton />
      <Link href="/no-red-button">/no-red-button</Link>
    </>
  )
}
