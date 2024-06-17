## Goal

A multi-page React app using React Router and simulated Star Wars data from `src/data/` (people, planets, films).

## App Overview

I'll build an app with three main pages to explore the data. Each page lets me select an item to see detailed info.

## Components

### Navbar
- Site title linking to home (`/`).
- Links to "people", "planets", and "films" pages.
- Highlight the active link.

### Sidebar
- Shows a list of items for the active page (e.g., people names, planet names).
- Each item links to a detailed view.
- Highlight the active item.
- Sidebar should scroll independently if needed.

### Main Content Pane
- Displays detailed info about the selected item.
- Different components for different data types (`<Person>`, `<Planet>`, `<Film>`).
- Render arrays as unordered lists and reference links appropriately.
- Default text when no item is selected.

## Other Requirements

- Home page (`/`) with basic app info (no sidebar).
- A simple 404 page for unknown URLs.

## Running the App

1. Run `npm install` to install dependencies.
2. Start the app with `npm run dev`.
3. Visit [http://localhost:5173](http://localhost:5173) to view the app.