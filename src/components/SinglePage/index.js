/*  eslint-disable max-len */

import React, {Fragment} from 'react';

import Icons from '../Icons';
import Header from '../Header';
import Footer from '../Footer';
import Wrapper from '../Wrapper';

import './SinglePage.css';

const SinglePage = () => {
  return (
    <Fragment>
      <Icons/>

      <div className="SinglePage">
        <Header/>

        <Wrapper>
          <main className="SinglePage__inner">
            <h2 className="SinglePage__title">Reading List</h2>

            <ul className="SinglePage__list">
              <li>
                <a href="https://www.w3.org/TR/filter-effects/">Filter Effects Module Level 1</a> by W3C
              </li>
              <li>
                <a href="https://css-tricks.com/color-filters-can-turn-your-gray-skies-blue/">Color Filters Can Turn Your Gray Skies Blue</a> by Amelia Bellamy-Royds
              </li>
              <li>
                <a href="https://alistapart.com/article/finessing-fecolormatrix">Finessing `feColorMatrix`</a> by Una Kravets
              </li>
            </ul>
          </main>
        </Wrapper>

        <Footer/>
      </div>
    </Fragment>
  );
};

export default SinglePage;
