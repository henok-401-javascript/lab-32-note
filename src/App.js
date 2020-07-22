import React from 'react';
import Header from './components/Header';
import Category from './components/Category';
import {Provider} from 'react-redux';
import { Container } from '@material-ui/core';
import store from './store';
import './style/style.scss';

 

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header/>
        <Category/>
      </Container>
    </Provider>
  );
}

export default App;
