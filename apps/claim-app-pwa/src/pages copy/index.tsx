import Head from 'next/head'
import Main from '@/components/Main'
interface IProps {
  title?: string
}
export default function Home({
  title = 'Boilerplate - NextJs/Typescript'
}: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Main />
    </>
  )
}
