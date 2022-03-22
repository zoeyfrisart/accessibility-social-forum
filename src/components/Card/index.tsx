import * as React from 'react'
import Link from 'next/link'

// Styles
import styles from './Card.module.scss'

declare global {
  interface ICardProps {
    slug: string
    title: string
    description?: string
    upvotes: number
    comments: number
    isFocusMode: boolean
  }
}

export function Card({
  slug,
  title,
  description,
  upvotes,
  comments,
  isFocusMode
}: ICardProps) {
  return (
    <section className={styles.card}>
        <Link href={`/post/${slug}`}>
          <a href={`/post/${slug}`}><h3>{title}</h3></a>
        </Link>
        {description && <p>{description}</p>}
        {isFocusMode ? null : (
          <footer>
            <button>{upvotes} upvotes <span className="sr-only"></span></button>
            <p>{comments} comments</p>
          </footer>
        )}
      </section>
  )
}
