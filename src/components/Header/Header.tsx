import Image from 'next/image'
import Link from 'next/link'

import NetflixLogo from '@/assets/netflixLogo.png'

export default function Header() {
  return (
    <main className="min-h-screen">
      <div>
        <a href="#">
          <Image src={NetflixLogo} alt="Logo da Netflix" />
        </a>
        <ul>
          <li>
            <Link href="#">
              <p>Séries</p>
            </Link>
            <Link href="#">
              <p>Filmes</p>
            </Link>
            <Link href="#">
              <p>Bombando</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
