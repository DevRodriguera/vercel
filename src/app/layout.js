import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Rodriguera Words',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={josefin_sans.className}>{children}</body>
    </html>
  )
}
