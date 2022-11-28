import Head from 'next/head'
import Nav from './Nav'
import Image from 'next/image'
import Footer from './Footer'
export const siteTitle = 'Cocoon Kids Big Hug'

export default function Layout({ pageTitle, isLanding = false, children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{`${siteTitle} | ${pageTitle}`}</title>
            </Head>
            {!isLanding ? (
                <Nav />
            ) : (
                <header>
                    <Image
                        src="/assets/logo-full.jpg"
                        alt="Cocoon Kids Big Hug logo"
                        width={1101}
                        height={415}
                    />
                </header>
            )}
            <main>{children}</main>
            {!isLanding ? (
                <Footer />
            ) : (
                <footer>
                    <p>
                        Cocoon Kids Big Hug is a therapeutic service for
                        children and young people age 3-19 and their families to
                        safely explore their experiences
                    </p>
                </footer>
            )}
        </div>
    )
}
