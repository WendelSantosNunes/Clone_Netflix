import Image from 'next/image'
import Link from 'next/link'

import { User, Search, Bell } from 'lucide-react'
import NetflixLogo from '@/assets/netflixLogo.png'

export function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-between px-16  py-6">
        <div className="flex">
          <Link href="/" className="mr-12">
            <Image src={NetflixLogo} alt="Logo da Netflix" />
          </Link>
          <ul className="flex">
            <li className="mr-5 delay-150 hover:text-gray-500">
              <Link href="#">
                <p>Séries</p>
              </Link>
            </li>
            <li className="mr-5 delay-150 hover:text-gray-500">
              <Link href="#">
                <p>Filmes</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="delay-150 hover:text-gray-500">
                <p>Bombando</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <Search className="mr-5 cursor-pointer" />
          <Link href="#" className="mr-5">
            Infantil
          </Link>
          <Bell className="mr-5  cursor-pointer" />
          <User className="mr-5  cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
