import React from "react";
import { Bio } from "../components/Bio";
import Layout from "../components/Layout";
import Head from 'next/head';


const AboutPage: React.FC = () => (
    <Layout>
        <Head>
            <title>AboutMe</title>
            <meta name="description" content="Page wehre you van learn about me!" />
        </Head>
        <Bio />
    </Layout>
);

export default AboutPage;
