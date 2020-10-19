import React from 'react';
import { Layout } from '../components/layout.js';
import { Clouds } from '../components/clouds.js';
import { Block } from '../components/block.js';
import { Hero } from '../components/hero.js';
import "../styles/global.css"

export default function Home() {
  return [
    <Layout>
      <Block background="clouds">
        <Hero />
      </Block>
      <Clouds previousColor="blue">
        coming soon
      </Clouds>
    </Layout>
  ];
}
