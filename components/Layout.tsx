import { PropsWithChildren } from 'react';
import Link from 'next/link';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="left-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/comic">Comic</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Contact me:</p>
        <ul>
          <li>
            <a href="https://github.com/akimoshka">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/akimoshka">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </li>
          <li>
            <a href="mailto:e.akimenko@innopolis.university">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/akimoshka55/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
