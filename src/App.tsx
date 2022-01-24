import React, { useEffect, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import ReactGA from 'react-ga';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAnalytics } from './hooks/useAnalytics';
import HomeAfter from './pages/home-after';

const EpisodePage = React.lazy(() => import('./pages/episode'));
const EventPage = React.lazy(() => import('./pages/event'));
const AboutPage = React.lazy(() => import('./pages/about'));
const MapPage = React.lazy(() => import('./pages/map'));
const AuthorPage = React.lazy(() => import('./pages/author'));
const GuestPage = React.lazy(() => import('./pages/guest'));
const LoginPage = React.lazy(() => import('./pages/login'));
const MyPage = React.lazy(() => import('./pages/mypage'));
const Upload = React.lazy(() => import('./pages/mypage/write'));
const WorksPage = React.lazy(() => import('./pages/works'));

function App() {
  const { initialized } = useAnalytics();
  const location = useLocation();

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);

  return (
    <div className="App">
      <ToastContainer />
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={HomeAfter} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/about/map" component={MapPage} />
          <Route exact path="/author/:authorId" component={AuthorPage} />
          <Route exact path="/author/:authorId/:episodeIdx" component={EpisodePage} />
          <Route exact path="/guest" component={GuestPage} />
          <Route exact path="/event" component={EventPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/mypage/write">
            <Upload isUpload={true} />
          </Route>
          <Route exact path="/mypage/edit/:episodeIdx">
            <Upload isUpload={false} />
          </Route>
          <Route exact path="/works" component={WorksPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
