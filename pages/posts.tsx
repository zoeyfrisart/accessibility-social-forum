import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Components
import { Card } from '../src/components/Card'
import { Nav } from '../src/components/Nav'

// Styling
import styles from '../styles/Home.module.scss'
import { POSTS_DATA } from '../src/__MOCKS__/posts'
import { Footer } from '../src/components/Footer'

const Home: NextPage = () => {
  const [isFocusModeActive, setIsFocusModeActive] = React.useState<boolean>(false)
  const [visiblePost, setVisiblePosts] = React.useState<number>(5)
  const [searchTerm, setSearchTerm] = React.useState<string>('')

  const mainRef = React.useRef<HTMLDivElement>()

  return (
    <div className={styles.container}>
      <Head>
        <title>Social Forum - Inaccessibility</title>
        <meta name="description" content="Forum for the Accessibility Foundation that allows advocates and impaired users to help each other achieve change." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => {
        mainRef.current?.focus()
      }}>Overslaan naar hoofdinhoud</button>
      <Nav />
      {/* @ts-expect-error This is fine Hush */}
      <main ref={mainRef} tabIndex={-1}>
        <h1>Gerapporteerde problemen</h1>
        <label>
          <input
            type="checkbox"
            name="focus-mode"
            id="focus-mode"
            onChange={(e) => {
              const { checked } = e.target
              setIsFocusModeActive(checked)
            }}
          />
          Inschakelen focusmodus
        </label>
        <p>De focusmodus verbergt het aantal upvotes en commentaren op de overzichtspagina.</p>
        <Link href="/report"><a>Een probleem melden</a></Link>
        <section>
          <h2>Het beste van de week</h2>
          <Card
            slug="bol-com-is-missing-alt-text-on-home-23e3089b"
            title="Bol.com mist alt tekst op home"
            upvotes={64}
            comments={3}
            isFocusMode={isFocusModeActive}
          />
        </section>

        <div>
          <label>
            Zoeken naar
            <input
              type="text"
              placeholder="Type your search"
              onKeyDown={(e) => {
                const { value } = (e.target as HTMLInputElement)
                setSearchTerm(value)
              }}
            />
          </label>
          <label>
          Sorteer op
            <select>
              <option value="popularity" defaultChecked>Populariteit</option>
              <option value="newest">Nieuwste</option>
              <option value="trending">Trending</option>
            </select>
          </label>
        </div>
        {
          POSTS_DATA.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, visiblePost).map((post, idx) => (
            <Card
              {...post}
              key={idx}
              isFocusMode={isFocusModeActive}
            />
          ))
        }
        {visiblePost < POSTS_DATA.length && (
          <button onClick={() => setVisiblePosts(visiblePost + 5)}>
            Meer berichten laden
          </button>
        )}
        {visiblePost >= POSTS_DATA.length && (
          <p>Geen berichten meer om te tonen</p>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Home
