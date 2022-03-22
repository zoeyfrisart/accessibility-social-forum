import Link from 'next/link'
import * as React from 'react'

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/reported-problems"><a>Gerapporteerde problemen</a></Link>
        </li>
        <li>
          <Link href="/usefull-tips"><a>Nuttige tips</a></Link>
        </li>
        <li>
          <Link href="/recommendations"><a>Aanbevelingen</a></Link>
        </li>
        <li>
          <Link href="/articles"><a>Artikelen</a></Link>
        </li>
        <li>
          <Link href="/report?type=problem"><a>Post maken</a></Link>
        </li>
      </ul>
    </nav>
  )
}
