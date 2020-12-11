import React from 'react';
import { Layout } from '../components/layout.js';
import { Block } from '../components/block.js';
import { Hero } from '../components/hero.js';
import { Clouds } from '../components/clouds.js';
import { Bio } from '../components/bio.js';
import { AboutLinks } from '../components/aboutLinks.js';
import "../styles/global.css"

export default function Home() {
  return [
    <Layout>
      <Block background="clouds">
        <Hero />
      </Block>
      <Clouds previousColor="blue">
        <Bio />
      </Clouds>
      <Block color="blue">
        <AboutLinks />
      </Block>
    </Layout>
  ];
}
