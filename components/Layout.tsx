
import { PropsWithChildren } from 'react';
import Link from 'next/link';


const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <ul className="left-nav">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/comic">Comic</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Contact me:</p>
          <ul>
            <li><a href="https://github.com/akimoshka" target="_blank"><i className="fab fa-github"></i></a></li>
            <li><a href="https://t.me/akimoshka" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
            <li><a href="mailto:e.akimenko@innopolis.university"><i className="fas fa-envelope"></i></a></li>
            <li><a href="https://www.instagram.com/akimoshka55/" target="_blank"><i className="fab fa-instagram"></i></a></li>
        </ul>
        </footer>
      </body>
    </html>
  );
}

export default Layout;
