import {
    Link,
    NavLink,
    Outlet,
    useParams,
    useRouteError
} from 'react-router-dom'

export function Home() {
    return (
        <>
            <h1>Home</h1>
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
    return <h1>Films</h1>
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
