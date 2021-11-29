import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useUser } from './hooks/useUser';
import AboutPage from './pages/about';
import MapPage from './pages/about/map';
import AuthorPage from './pages/author';
import GuestPage from './pages/guest';
import Home from './pages/home';
import LoginPage from './pages/login';
import MyPage from './pages/mypage';
import Upload from './pages/mypage/write';
import WorksPage from './pages/works';
import WorkDetailPage from './pages/works/detail';

function App() {
  const { userData } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/about/map" component={MapPage} />
        <Route exact path="/author/:id" component={AuthorPage} />
        <Route exact path="/guest" component={GuestPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mypage">
          {userData ? <Redirect to="/" /> : <MyPage />}
        </Route>
        <Route exact path="/mypage/write" component={Upload}>
          {userData ? <Redirect to="/" /> : <Upload />}
        </Route>
        <Route exact path="/works" component={WorksPage} />
        <Route exact path="/works/:id" component={WorkDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
