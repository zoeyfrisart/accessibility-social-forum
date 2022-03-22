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
      {/* // @ts-expect-error This is fine Hush */}
      <main tabIndex={-1} ref={mainRef}>
        <Link href="/posts"><a>Terug naar gerapporteerde problemen</a></Link>
        <h1>Bol.com mist alt tekst op home</h1>
        <ul>
          <li>Reported for: Bol.com</li>
          <li>Screen-reader type: NVDA 2021</li>
        </ul>
          <p>My screen reader stops reading the content on the home page. I do not know where to click on and cannot finish the payment.</p>
          <p>Date created: 20/03/2022</p>
          <section>
            <h2>Solution given by reporter</h2>
            <p>My son said this problem occurred, because the images are in an “Iframe”. If it is outside of it, the problem should be fixed</p>
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
