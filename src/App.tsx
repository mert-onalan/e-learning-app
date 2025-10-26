import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingFallback from "./components/LoadingFallback/LoadingFallback";
import { ROUTES } from "./routes";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const DescriptionPage = lazy(() => import("./pages/DescriptionPage/DescriptionPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
    return (
        <Router>
            <Toaster />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path={ROUTES.MAIN} element={<MainPage />} />
                    <Route path={ROUTES.COMPONENT_DETAILS} element={<DescriptionPage />} />
                    <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
