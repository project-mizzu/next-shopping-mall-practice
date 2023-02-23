import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '@/src/component/ItemList';
import { Divider, Header, Dimmer, Loader } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const getData = () => {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>HOME | MIZZU</title>
        <meta name="description" content="Maybeline Cosmetics"></meta>
      </Head>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <Header as="h2" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)}></ItemList>
          <Header as="h2" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)}></ItemList>
        </>
      )}
    </>
  );
}
