import Head from 'next/head'    
import styles from 'src/styles/Home.module.scss'
import { Header } from 'src/components/Header/Header'
import { Footer } from 'src/components/Footer/Footer'
import { Aside } from 'src/components/Aside/Aside'
import { Main } from 'src/components/Main/Main'
import { client } from 'libs/client'

export const getServerSideProps = async(context) => {
    const id = context.params.id;
    try {
        const data = await client.get({ endpoint: "article", contentId: id });
        if (!data.category) {
            throw new Error("Category is not found.");
        }
        const categoryData = await client.get({ endpoint: "category"});
        let categories = [];
        categoryData.contents.map((category) => {
            categories.push({
                id: category.id,
                title: category.title,
                isActive: (category.id === data.category.id) ? true: false
            });
        });
        return {
            props: {
                article: data,
                categories: categories
            }
        }
    } catch(error) {
        return {
            notFound: true
        };
    }
}

export default function Home({ article, categories }) { 
    return (
        <>
            <Head>
                <title>{`${article.title} | Blog Template`}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className={styles.gridArea}>
                <Header />
                <Aside categories={ categories } />
                <Main article={ article } />
                <Footer />
            </div>
        </>
    )
}
