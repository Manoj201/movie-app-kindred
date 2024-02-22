import { ROUTES } from '@constants/index';
import MovieDetailPage from '@pages/MovieDetail.page';
import MovieSearchPage from '@pages/MovieSearch.page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from 'src/Layout/AppLayout';

const MainRoute: React.FC = () => {
    return (
        <BrowserRouter basename="/movie-app-kindred/">
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.MOVIE_SERACH_PAGE} />} />
                <Route element={<AppLayout />}>
                    <Route path={ROUTES.MOVIE_SERACH_PAGE} element={<MovieSearchPage />} />
                    <Route path={ROUTES.MOVIE_DETAILS_PAGE} element={<MovieDetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;
