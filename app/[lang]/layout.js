import './globals.css'
import { Inter } from 'next/font/google'
import { BsLinkedin,BsGithub } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZAKARIA SDIK | PORTFOLIO',
  icons: {
    icon: 'https://i.ibb.co/6WrtMRt/252099626-2990451804556486-3949312573379676657-n.jpg',
  }
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <div className='fixed left-0 top-2/4 bg-white shadow-lg py-3 px-2'>
          <ul>
            <li className='mb-3 hover:bg-[rgba(120,67,233,.2)] p-2'><a className='text-xl' href="https://www.linkedin.com/in/zakaria-s-3b8088138/" target='_blank'><BsLinkedin size="1.5em"/></a></li>
            <li className='mb-3 hover:bg-[rgba(120,67,233,.2)] p-2'><a className='text-center' href="https://github.com/zikodotcom" target='_blank'><BsGithub size="1.7em"/></a></li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}
