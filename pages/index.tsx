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
        <h1>Over de Toegankelijkheidsgemeenschap</h1>
        <p>De toegankelijkheidsgemeenschap is een online-omgeving waar mensen met een beperking hun ontoegankelijkheidsproblemen kunnen bespreken met website-eigenaren en voorstanders.</p>
        <p>Het is een plaats waar alle betrokken partijen kunnen samenkomen en de ontoegankelijkheidsproblemen op het web kunnen meedelen.</p>
        <Link href="/"><a>Maak deel uit van de Toegankelijkheidsgemeenschap.</a></Link>

        <section>
          <h2>Hoe het werkt</h2>
          <ol>
            <li>
              <h3>Gebruikers plaatsen problemen en tips</h3>
              <p>Gebruikers kunnen berichten plaatsen over de ontoegankelijkheid die zij op het web ondervinden.</p>
            </li>
            <li>
              <h3>Mensen zorgen voor het bewust maken</h3>
              <p>De gebruikers kunnen posts upvote, communiceren over de post, en Handy Tips maken, voor een toegankelijker web.</p>
            </li>
            <li>
              <h3>Website eigenaren kunnen er naar kijken</h3>
              <p>Website eigenaren hebben een apart dashboard waar ze alle issues kunnen zien. Wanneer een probleem is opgelost kan de poster of de website eigenaar het bericht op &quot;opgelost&quot; zetten.</p>
            </li>
          </ol>
          <Link href="/">Start met posten</Link>
        </section>
        <section>
          <h2>De extensie</h2>
          <p>Wilt u problemen melden zonder naar onze site te hoeven gaan? Gebruik de extensie.</p>
          <ul>
            <li>Maak een melding op de site waar je een probleem mee hebt.</li>
            <li>Laat een automatische, geanonimiseerde schermopname van het probleem maken.</li>
          </ul>
          <a href="https://extension-accessibility.vercel.app/">Installeer de extensie</a>
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
