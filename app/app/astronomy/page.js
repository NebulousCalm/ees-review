import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          <FontAwesomeIcon icon={faFaceRelieved} />
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}