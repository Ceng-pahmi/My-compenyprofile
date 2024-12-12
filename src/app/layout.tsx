import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'TechSundanise Solutions',
  description: 'Innovative technology solutions for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">TechSundanise</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/teams" className="hover:underline">Teams</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-muted text-muted-foreground py-4">
          <div className="container mx-auto px-4 text-center">
            © 2023 TechSundanise Solutions. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

