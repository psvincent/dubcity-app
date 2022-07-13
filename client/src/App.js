import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserPage from './pages/UserPage';
import Homepage from './pages/Homepage';
import EventList from './components/Events';
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes className="body">              
            <Route 
              path="/" 
              element={<Homepage />} 
            />
            <Route 
              path="/" 
              element={<EventList />} 
            />
            <Route 
              path="*" 
              element={<h1 className="display-2">Wrong page!</h1>} 
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/userPage"
              element={<UserPage />}
            />
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
