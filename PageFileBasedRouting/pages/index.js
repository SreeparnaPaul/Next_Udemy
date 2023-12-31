import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <h2>This is Home Page</h2>
     <ul>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/clients">Clients</Link>
      </li>
     </ul>
    </div>
  )
}
