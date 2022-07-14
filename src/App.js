import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';

// import Post from './components/Post';

// This is ok, but we'd like to move towards a global context/global state, where we can easily pass state to components through context rather than through complicated prop drilling
// This is a better way to store and manage our global state, which in our case is our FeedbackItems

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='hello world'></Header>
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />}>
              About Page
            </Route>
            {/* <Route path='/post/*' element={<Post />}>
            Post
          </Route> */}
          </Routes>
        </div>
        <AboutIconLink></AboutIconLink>
        <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
