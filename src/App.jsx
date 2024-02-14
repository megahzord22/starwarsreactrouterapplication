import {
    Link,
    NavLink,
    Outlet,
    useParams,
    useRouteError
} from 'react-router-dom'

import peopleData from './data/people.json'
import filmsData from './data/films.json'
import planetsData from './data/planets.json'

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Check out information about the people, planets, and films of Star Wars!</p>
            <p><Link to="/people">People</Link></p>
            <p><Link to="/planets">Planets</Link></p>
            <p><Link to="/films">Films</Link></p>
        </>
    )
}

export function People() {
    return <h1>People</h1>
}

export function Planets() {
    return <h1>Planets</h1>
}

export function Films() {
    return  <>
    <h1>Films</h1>
    <SideBar></SideBar>
    <ul>
        {films.map(film => (
            <li key={film.episode_id}>
                <Link to={`/films/${film.episode_id}`}>{film.title}</Link>
            </li>
        ))}
    </ul>
</>
}

export function Root(props) {
    const { children } = props
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/people"
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                    }
                    >
                    People</NavLink></li>
                    <li><NavLink to="/planets"
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                    }
                    >
                    Planets</NavLink></li>
                    <li><NavLink to="/films"
                    className={({ isActive }) =>
                    isActive ? "active" : ""
                    }
                    >
                    Films</NavLink></li>
                </ul>
            </nav>
            <main>{children || <Outlet />}</main>
        </>
    )
}

export function Sidebar() {
    const films = Object.values(filmsData)
    const planets = Object.values(planetsData)
    const people = Object.values(peopleData)
    return (
        <>
            <aside>
                <ul>
                    {Object.keys(sidebar).map(item => (
                        <li key={id}>
                        <NavLink to={`/films/${film.episode_id}`}>{film.title}</NavLink>
                    </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function PeopleItem() {
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()

    const peopleItem = People[params.peopleItem]

    return (
        <>
            <h2>{peopleItem.name}</h2>
            <p>{peopleItem.homeworld}</p>
            <ul>{peopleItem.films}</ul>
        </>
    )
}

export function PlanetItem() {
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()

    const planetItem = Planet[params.planetItem]

    return (
        <>
            <h2>{planetItem.name}</h2>
            <p>{planetItem.climate}</p>
            <ul>{planetItem.residents}</ul>
        </>
    )
}

export function FilmItem() {
    const { id } = useParams()
    const film = filmsData[id]
    return (
        <>
            <h2>{film.title}</h2>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release Date: {film.release_date}</p>
            <p>Opening Crawl: {film.opening_crawl}</p>
            <p>Characters: {film.characters.join(', ')}</p>
            <p>Planets: {film.planets.join(', ')}</p>
        </>
    )
}

export function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </>
    )
}
export default function App() {
    return (
        <h1>
            A long time ago, in a galaxy far, far away...
        </h1>
    )
}
