/*  eslint-disable max-len */

import React, {Fragment} from 'react';

import Icons from '../Icons';
import Header from '../Header';
import Footer from '../Footer';
import Wrapper from '../Wrapper';
import Demos from '../Demos';

import filtersList from './filtersList';
import filtersListGrayscale from './filtersList-grayscale';
import filtersListBlendmodes from './filtersList-blendmodes';

import './SinglePage.css';

const SinglePage = () => {

  return (
    <Fragment>
      <Icons/>

      <div className="SinglePage">
        <Header/>

        <Wrapper>
          <main className="SinglePage__inner">
            <h2 className="SinglePage__title">About tool</h2>

            <p>This tool creates SVG Gradient Map Filter from given colors. You can use ready palettes or edit them and get yours. The tool was inspired by the article <a href="https://css-tricks.com/using-svg-to-create-a-duotone-image-effect/">Using SVG to Create a Duotone Effect on Images</a> by Lentie Ward.</p>

            <p>Test filter on your images before adding to a project, the result may differ for different images.</p>

            <p>Photo: <a href="https://unsplash.com/photos/BjJP2TN8WoI">Nicki Eliza Schinow on Unsplash</a>.</p>

            <h3 className="SinglePage__subtitle">Examples</h3>

            <p>Filter with different palettes:</p>

            <Demos
              list={filtersList}
            />

            <p>Different grayscale types may dramatically change the result so try to change them to find more suitable:</p>

            <Demos
              list={filtersListGrayscale}
            />

            <p>With blend modes filters start to look like effects from Instagram:</p>

            <Demos
              list={filtersListBlendmodes}
              />

            <p>Play with them to get many more vibrant filters for your images : )</p>

          </main>
        </Wrapper>

        <Footer/>
      </div>
    </Fragment>
  );
};

export default SinglePage;
