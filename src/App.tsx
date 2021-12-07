import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useUser } from './hooks/useUser';
import AboutPage from './pages/about';
import MapPage from './pages/about/map';
import AuthorPage from './pages/author';
import EpisodePage from './pages/episode';
import GuestPage from './pages/guest';
import Home from './pages/home';
import LoginPage from './pages/login';
import MyPage from './pages/mypage';
import Upload from './pages/mypage/write';
import WorksPage from './pages/works';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isValidating, author } = useUser();

  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/about/map" component={MapPage} />
        <Route exact path="/author/:authorId" component={AuthorPage} />
        <Route exact path="/author/:authorId/:episodeIdx" component={EpisodePage} />
        <Route exact path="/guest" component={GuestPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mypage">
          {!isValidating && !author ? <Redirect to="/" /> : <MyPage />}
        </Route>
        <Route exact path="/mypage/write" component={Upload}>
          {!isValidating && !author ? <Redirect to="/" /> : <Upload />}
        </Route>
        <Route exact path="/works" component={WorksPage} />
      </Switch>
    </div>
  );
}

export default App;
