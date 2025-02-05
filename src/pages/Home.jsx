import React from 'react';

import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';

import Posts from '../components/Posts/Posts.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 