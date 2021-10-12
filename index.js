import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

const httpLink = createHttpLink({
  uri: ''
}) 

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      'x-api-key': ''
    }
  }
})

const clinet = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    )
  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
