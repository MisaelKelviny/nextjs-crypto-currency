import Head from "next/head"
import Link from "next/link"
import { Logo } from "./Icons/logo"

interface LayoutProps {
  children?: any
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}