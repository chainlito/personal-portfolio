import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { GlobalContext } from './AppContext';

type HeaderItemProps = { label: string; href: string };
const HeaderItem: React.FC<HeaderItemProps> = function (props) {
	const { label, href } = props;
	const { mode } = useContext(GlobalContext);

	return (
		<li className="my-auto rounded border border-transparent marker:text-cyan-400">
			<Link href={href}>
				<div className={`antialiased text-gray-500 hover:text-white-500 ${!mode && 'hover:text-cyan-50'}`}>
					{label}
				</div>
			</Link>
		</li>
	);
};

export const Header: React.FC = function () {
  const [isNavOpen, setIsNavOpen] = useState(false);

	return (
    <React.Fragment>
      <nav className="navbar flex">
        <div className="container mx-auto flex w-full flex-row flex-wrap px-16 py-4 font-sans text-base sm:px-20 md:flex-row">
          <div className={`logo duration-600 my-4 mr-4 ease-in-out hover:scale-125`}>
            <Link href="/">{'</>'}</Link>
          </div>
          <div className="grow" />
          <div className="flex flex-row flex-wrap gap-x-16 gap-y-4 md:flex-row">
            <section className="MOBILE-MENU flex lg:hidden items-center">
              <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen(prev => !prev)}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                  <svg
                    className="h-8 w-8 text-white-600"
                    viewBox="0 0 36 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="30" y1="6" x2="6" y2="30" />
                    <line x1="6" y1="6" x2="30" y2="30" />
                  </svg>
                </div>
              </div>
            </section>
            <ul className="flex list-inside flex-wrap justify-between gap-x-10 DESKTOP-MENU hidden space-x-8 lg:flex">
              <HeaderItem label="About Me" href="/about-me" />
              <HeaderItem label="Experience" href="/experience" />
              <HeaderItem label="Projects" href="/projects" />
              <HeaderItem label="Contact Me" href="/contact-me" />
              <HeaderItem label="Resume" href="/resume" />
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: rgba(74, 195, 191, 0.7);
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </React.Fragment>
	);
};
