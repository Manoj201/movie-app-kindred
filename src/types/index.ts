interface FormvalueType {
    movieName: string;
    year: string;
}
interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface MovieDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

interface MovieSearchResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
    page: string;
    Error: string;
}

interface MovieSearchRequest {
    search: string;
    year: string;
    page: string;
}

interface MovieState {
    searchFormValue: FormvalueType;

    movieList: Record<string, Movie[]>;
    totalResults: number;
    curruntPage: string;
    movieListLoading: boolean;
    movieListError: boolean;

    movieDetail: MovieDetails | null;
    movieDetailLoading: boolean;
    movieDetailError: boolean;
}

export enum ToastType {
    Success,
    Warn,
    Error,
}

export type { Movie, MovieState, MovieSearchResponse, MovieSearchRequest, MovieDetails, FormvalueType };
