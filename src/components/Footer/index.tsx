import * as React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <ul>
        <li><Link href="/disclaimer"><a>Disclaimer</a></Link></li>
        <li><Link href="/privacy-policy"><a>Privacybeleid</a></Link></li>
        <li><Link href="/copyright"><a>Auteursrecht</a></Link></li>
        <li><Link href="/accessibility-policy"><a>Toegankelijkeheids verklaring</a></Link></li>
      </ul>
    </footer>
  )
}
