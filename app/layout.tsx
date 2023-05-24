import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import dhruva from '../public/images/Dhruva.png'
 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Website',
  description: 'Dhruva Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* Navbar Section */}
        <div className="w-full bg-white border-t border-gray-100 shadow sticky top-0">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
              <Link href="/" className="font-bold text-2xl">PortFolio</Link>
            </div>
            <div className="hidden lg:block">
              <ul className="ml-12 inline-flex space-x-8">
                <li>
                  <a
                    href="/"
                    className="inline-flex items-center text-xl font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-xl font-semibold text-gray-800 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="inline-flex items-center text-xl font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="inline-flex items-center text-xl font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="ml-2 mt-2 hidden lg:block">
              <span className="relative inline-block">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={dhruva}
                  width={500}
                  height={500}
                  alt="Dhruva Indavarapu"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
              </span>
            </div>
            <div className="ml-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
        {children}
      {/* Footer Section */}   
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Dhruva Website™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center gap-x-9 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 className='hover:bg-sky-700'"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 className='hover:bg-sky-700'"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </li>
          </ul>
      </footer>
      </body>
    </html>
  )
}
