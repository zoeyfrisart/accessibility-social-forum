import Link from 'next/link'
import * as React from 'react'
import { Footer } from '../src/components/Footer'

// Components
import { Nav } from '../src/components/Nav'

export default function Home() {
  const mainRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <header>
        <button onClick={() => {
          mainRef.current?.focus()
        }}>Overslaan naar hoofdinhoud</button>
        <Nav />
        <p>34 problemen opgelost</p>
        <p>28 mensen geholpen</p>
      </header>
      <main ref={mainRef} tabIndex={-1}>
        <h1>About The Accessibility Community</h1>
        <p>The Accessibility Community is an online environment where people with an impairement can voice there inaccessibility issues with website owners and advocats.</p>
        <p>It is a place where all involved parties can come together and communicate the inaccessibility issues on the web.</p>
        <Link href="/"><a>Be part of the Accessibility Community.</a></Link>

        <section>
          <h2>Hoe het werkt</h2>
          <ol>
            <li>
              <h3>Users post issues and tips</h3>
              <p>Users can create posts about the inaccessibility they face on the web.</p>
            </li>
            <li>
              <h3>People raise awareness</h3>
              <p>Other users can upvote posts, communicate on the post, and create Handy Tips, for a more accessible web.</p>
            </li>
            <li>
              <h3>Website owners can look at it</h3>
              <p>Website owners have a seperate dashboard where they can see all the issues. When an issue is resolved the poster or the website owner can set the post to “resolved”.</p>
            </li>
          </ol>
          <Link href="/">Start met posten</Link>
        </section>
        <section>
          <h2>De extensie</h2>
          <p>Want to report issues without having to go to our site? Use the extension.</p>
          <ul>
            <li>Make reports on the site you have a issue with.</li>
            <li>Have an automatic, anonymised screen recording of the issue.</li>
          </ul>
        </section>
        <section>
          <h2>Posts</h2>
          <Link href="/"><a>Posts aanmaken</a></Link>
          <ul>
            <li>
              <Link href="/posts"><a><h3>Toon gerapporteerde problemen</h3></a></Link>
              <p>Berichten over verschillende problemen die mensen op het web zijn tegengekomen</p>
            </li>
            <li>
              <Link href="/recommendations"><a><h3>Toon aanbevelingen</h3></a></Link>
              <p>Wilt u uw favoriete website delen? Maak een aanbeveling voor hen.</p>
            </li>
            <li>
              <Link href="/handy-tips"><a><h3>Handige tips</h3></a></Link>
              <p>Heb je een leuke truc of handige tip die je wilt delen? Maak een handige tips post.</p>
            </li>
            <li>
              <Link href="/articles"><a><h3>Artikelen</h3></a></Link>
              <p>Wil je iets delen, maar heb je wat meer tekens nodig, maak dan een artikel</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
