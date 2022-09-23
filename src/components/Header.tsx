import React, { useContext } from 'react';
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

	return (
		<nav className="navbar flex">
			<div className="container mx-auto flex w-full flex-row flex-wrap px-16 py-4 font-sans text-base sm:flex-col sm:px-20 md:flex-row">
				<div className={`logo duration-600 my-4 mr-4 ease-in-out hover:scale-125`}>
					<Link href="/">{'</>'}</Link>
				</div>
				<div className="grow" />
				<div className="flex flex-row flex-wrap gap-x-16 gap-y-4 md:flex-row">
					<ul className="flex list-inside flex-wrap justify-between gap-x-10">
						<HeaderItem label="About Me" href="/about-me" />
						<HeaderItem label="Experience" href="/experience" />
						<HeaderItem label="Projects" href="/projects" />
						<HeaderItem label="Contact Me" href="/contact-me" />
						<HeaderItem label="Resume" href="/resume" />
					</ul>
				</div>
			</div>
		</nav>
	);
};
