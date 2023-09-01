import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Microbots from './pages/Microbots';
import Projects from './pages/Projects';
import Documentation from './pages/Documentation';
import MeetTheTeam from './pages/MeetTheTeam';
import GettingStarted from './pages/GettingStarted';
import Donate from './pages/Donate';
import Placeholder from './pages/Placeholder';
import PageNotFound from './pages/PageNotFound';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<RootLayout />}>
            <Route index element={<Home />} />,
            <Route path="/Microbots" element={<Microbots />} />,
            <Route path="/Projects" element={<Placeholder />} />,
            <Route path="/Documentation" element={<Placeholder />} />,
            <Route path="/MeetTheTeam" element={<MeetTheTeam />} />,
            <Route path="/Donate" element={<Placeholder />} />,
            <Route path="/GettingStarted" element={<Placeholder />} />,
            <Route path="/Placeholder" element={<Placeholder />} />,
            <Route path="/*" element={<PageNotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider basename="/riot-website-" router={router} />;
}

export default App;
