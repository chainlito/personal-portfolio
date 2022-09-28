import React, { useState, useEffect } from 'react';
import Typist from 'react-typist-component';
import Image from 'next/image';
import ImageSelf from '../../public/images/self.png';

export default function IndexPage() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		setCount(1);
	}, [count]);

	return (
		<div className="flex flex-col space-y-32">
			<section id="introduction" className="mx-auto flex max-w-full flex-col space-y-8 pt-6 sm:pt-32">
				<div className="flex flex-col space-y-8">
					<div className="flex flex-col ">
						<h3 className="font-sans text-2xl text-blue-400">I'M BRANDON LEE</h3>
						<div className="flex space-x-8">
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
					<p className={`max-w-4xl text-lg`}>
						I&apos;m a prolific, creative software developer with 8+ years of experience helping small to
						medium sized companies from different industries. Passionate about building world class web and
						desktop applications. Enthusiastic engineer eager to contribute to team success through one's
						hard work, attention to detail and excellent organizational skills.{' '}
					</p>
				</div>
			</section>
      <section id="photo">
        <Image
          className="absolute z-10 block h-full rounded object-cover object-center grayscale group-hover:blur-none group-hover:contrast-100 group-hover:grayscale-0"
          src={ImageSelf}
          placeholder="blur"
        /> 
      </section>
		</div>
	);
}
