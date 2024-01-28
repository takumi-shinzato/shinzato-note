import Head from 'next/head'    
import styles from 'src/styles/Home.module.scss'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>{`Blog Template`}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="robots" content="noindex" />
            </Head>
            <div className={styles.gridArea}>
                <Header />
                <main className={"main"}>
                    <h1>404 Not Found</h1>
                    <p>申し訳ございません。お探しのページは見つかりませんでした。</p>
                </main>
                <Footer />
            </div>
        </>
    )
}