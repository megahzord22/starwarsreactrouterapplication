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
            {/* <h1>Home</h1> */}
            <div className="home">
            <p>Check out information about the people, planets, and films of Star Wars!</p>
            <p><Link to="/people">People</Link></p>
            <p><Link to="/planets">Planets</Link></p>
            <p><Link to="/films">Films</Link></p>
            </div>
        </>
    )
}

export function People() {
    return <>
    <div className="data">
    <aside className="side-nav">
        <ul>
                    {Object.keys(peopleData).map(item => (
                        <li key={item}>
                        <NavLink to={`/people/${item}`}>{peopleData[item].name}</NavLink>
                    </li>
                    ))}
                </ul>
    </aside>
    </div>
    <div className="content"><Outlet /></div>
</>
}

export function Planets() {
    return <>
    <div className="data">
    <aside className="side-nav">
        <ul>
                    {Object.keys(planetsData).map(item => (
                        <li key={item}>
                        <NavLink to={`/planets/${item}`}>{planetsData[item].name}</NavLink>
                    </li>
                    ))}
                </ul>
    </aside>
    </div>
    <div className="content"><Outlet /></div>
</>
}

export function Films() {
    return  <>
    <div className="data">
            <aside className="side-nav">
                <ul>
                    {Object.keys(filmsData).map(item => (
                        <li key={item}>
                        <NavLink to={`/films/${item}`}>{filmsData[item].title}</NavLink>
                    </li>
                    ))}
                </ul>
            </aside>
            <div className="content"><Outlet /></div>
            </div>
        </>
        
}

export function Root(props) {
    const { children } = props
    return (
        <>
        <div className="heading">
            <h1>Star Wars</h1>
        </div>
        <div className="root-nav">
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
            </div>
            <main>{children || <Outlet />}</main>
        </>
    )
}


export function PeopleItem() {
    const { id } = useParams()
    const people = peopleData[id]

    return (
        <>
            <h2>{people.name}</h2>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Birth Year: {people.birth_year}</p>
            <p>Gender: {people.gender}</p>
            <p>Homeworld: <Link to={people.homeworld}>{people.homeworld}</Link></p>
            <p>Films:</p>
            <ul>
            {people.films.map(item => (
                        <li key={item}>
                        <Link to={item}>{item}</Link>
                    </li>
                    ))}</ul>
        </>
    )
}

export function PlanetItem() {
    const { id } = useParams()
    const planet = planetsData[id]

    return (
        <>
        <h1>debugging</h1>
            <h2>{planet.name}</h2>
            <p>Rotation: {planet.rotation_period}</p>
            <p>Orbit: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
            <p>Residents:</p>
            <ul>
            {planet.residents.map(item => (
                        <li key={item}>
                        <Link to={item}>{item}</Link>
                    </li>
                    ))}</ul>
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
            <p>Characters:</p>
            <ul>
            {film.characters.map(item => (
                        <li key={item}>
                        <Link to={item}>{item}</Link>
                    </li>
                    ))}</ul>
            <p>Planets:</p>
            <ul>
            {film.planets.map(item => (
                        <li key={item}>
                        <Link to={item}>{item}</Link>
                    </li>
                    ))}</ul>
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
