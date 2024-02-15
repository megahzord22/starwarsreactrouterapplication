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
    return <>
    <aside>
        <ul>
            {Object.keys(peopleData).map(item => (
                <li key={item}>
                <NavLink to={`/people/${peopleData[item].name}`}>{peopleData[item].name}</NavLink>
            </li>
            ))}
        </ul>
    </aside>
    <div><Outlet /></div>
</>
}

export function Planets() {
    return <>
    <aside>
        <ul>
            {Object.keys(planetsData).map(item => (
                <li key={item}>
                <NavLink to={`/planets/${planetsData[item].name}`}>{planetsData[item].name}</NavLink>
            </li>
            ))}
        </ul>
    </aside>
    <div><Outlet /></div>
</>
}

export function Films() {
    return  <>
            <aside>
                <ul>
                    {Object.keys(filmsData).map(item => (
                        <li key={item}>
                        <NavLink to={`/films/${filmsData[item].episode_id}`}>{filmsData[item].title}</NavLink>
                    </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
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


export function PeopleItem() {
    const { id } = useParams()
    const people = peopleData[id]

    return (
        <>
            <h2>{peopleItem.name}</h2>
            <p>{peopleItem.homeworld}</p>
            <p>{people.films.join(', ')}</p>
        </>
    )
}

export function PlanetItem() {
    const { id } = useParams()
    const planet = planetsData[id]

    return (
        <>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Residents: {planet.residents.join(', ')}</p>
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
