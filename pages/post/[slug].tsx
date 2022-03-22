import * as React from 'react'
import Link from 'next/link'
import { Nav } from '../../src/components/Nav'
import { Footer } from '../../src/components/Footer'

export default function PostSingle() {
  const mainRef = React.useRef<HTMLDivElement>()

  return (
    <>
      <button onClick={() => {
        mainRef.current?.focus()
      }}>Overslaan naar hoofdinhoud</button>
      <Nav />
      {/* @ts-expect-error This is fine Hush */}
      <main tabIndex={-1} ref={mainRef}>
        <Link href="/posts"><a>Terug naar gerapporteerde problemen</a></Link>
        <h1>Bol.com mist alt tekst op home</h1>
        <ul>
          <li>Geraporteerd: Bol.com</li>
          <li>Screen-reader type: NVDA 2021</li>
        </ul>
          <p>Mijn schermlezer stopt met het lezen van de inhoud op de startpagina. Ik weet niet waar ik op moet klikken en kan de betaling niet afmaken.</p>
          <p>Date aangemaakt: 20 maart 2022</p>
          <section>
            <h2>Solution given by reporter</h2>
            <p>Mijn zoon zei dat dit probleem zich voordeed, omdat de beelden in een "Iframe" staan. Als het daarbuiten is, zou het probleem verholpen moeten zijn</p>
          </section>
          <section>
            <h2>Author</h2>
            <figure>
              <img
                src="https://via.placeholder.com/150"
                alt="Mark, 48 jaar oud glimlacht naar de camera terwijl hij achter zijn macbook pro zit."
              />
              <p>Mark van Leeuwen</p>
            </figure>
          </section>
          <section>
            <h2>Reacties</h2>
            <button>Reactie geven</button>

            <section>
              <h3>Jeroen Huizenaar</h3>
              <p>De content van een reactie</p>
            </section>

            <section>
              <h3>Jeroen Huizenaar</h3>
              <p>De content van een reactie</p>
            </section>
          </section>
      </main>
      <Footer />
    </>
  )
}
