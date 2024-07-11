import React from "react";
import { Home } from "../components/Bio";
import Layout from "../components/Layout";
import Head from 'next/head';

const HomePage: React.FC = () => (
    <Layout>
        <Head>
            <title>Home</title>
            <meta name="description" content="Ekaterina Akimenko's personal website showcasing projects and more." />
        </Head>
        <Home />
    </Layout>
);

export default HomePage;
