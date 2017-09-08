import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleShowContainer from './containers/ArticleShowContainer';
import ArticleFormContainer from './containers/ArticleFormContainer';

let indexPage = document.getElementById('index');
let showPage = document.getElementById('show');
let newPage = document.getElementById('new');

if(indexPage){
  ReactDOM.render(
    <ArticlesIndexContainer />,
    indexPage
  )
}

if(showPage){
  ReactDOM.render(
    <ArticleShowContainer />,
    showPage
  )
}

if(newPage){
  ReactDOM.render(
    <ArticleFormContainer />,
    newPage
  )
}
