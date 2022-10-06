import React, { useState, useEffect } from 'react';
import Typist from 'react-typist-component';
import Image from 'next/image';
import ImageSelf from '../../public/images/self.png';
import Link from 'next/link';

export default function IndexPage() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		setCount(1);
	}, [count]);

	return (
		<div className="flex flex-row space-y-32">
      <section id="photo">
        <Image
          className="absolute z-10 block h-full rounded object-cover object-center grayscale group-hover:blur-none group-hover:contrast-100 group-hover:grayscale-0"
          src={ImageSelf}
          height={300}
          placeholder="blur"
        /> 
      </section>
			<section id="introduction" className="mx-auto flex max-w-full flex-col space-y-8">
				<div className="flex flex-col">
					<div className="flex flex-col ">
						<h3 className="font-sans text-2xl text-blue-400">I'M BRANDON LEE</h3>
						<div className="flex space-x-8 mt-3">
							<h4
								className={`flex-none text-3xl font-bold h-fit w-fit font-inter sm:text-4xl md:text-5xl`}
							>    
								{count ? (
									<Typist
										cursor={<span>|</span>}
										typingDelay={70}
										onTypingDone={() => setCount(0)}
									>
										<span>A Software Engineer</span>
										<Typist.Backspace count={17} />
                    <Typist.Delay ms={1500} />
										<span> Full-Stack Developer</span>
										<Typist.Backspace count={20} />
                    <Typist.Delay ms={1500} />
										<span> Long-Life Learner</span>
										<Typist.Backspace count={20} />
                    <Typist.Delay ms={1500} />
									</Typist>
								) : (
									' '
								)}
							</h4>
						</div>
					</div>
					<p className="max-w-4xl text-lg mt-10">
						I&apos;m a prolific, creative software developer with 8+ years of experience helping small to
						medium sized companies from different industries. Passionate about building world class web and
						desktop applications. Enthusiastic engineer eager to contribute to team success through one's
						hard work, attention to detail and excellent organizational skills.{' '}
					</p>
          <Link href="about-me">
            <button
              type="button"
              className="i flex mt-10 h-12 p-3 w-64 justify-center font-bold bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-2xl transform hover:scale-x-110 hover:scale-y-105 duration-300 ease-out"
            >
              <span className="text-white mr-3">LEARN MORE</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </Link>
				</div>
			</section>
		</div>
	);
}
