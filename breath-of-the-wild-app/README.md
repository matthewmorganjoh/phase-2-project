# React Monster Compendium

This is a single page React application that uses styled-components for CSS and the Breath of the Wild Compendium API. It displays a list of monsters and their description, image, and common locations.

## Features

- Home: A welcome page for users. 
- Monsters: A grid list of monsters. Each monster image is clickable and routes the user to the individual monster's stats page.
- MonsterStats: Shows detailed statistics for each monster.
- Request: A form where users can submit a request for a new monster to be added.

## Structure

The main components are `NavBar`, `Home`, `Monsters`, `MonsterStats`, and `Request`.

`NavBar`: This is the navigation bar at the top of the app. It allows users to navigate between the Home, Monsters, and Request pages.
`Home`: This is the landing page of the app.
`Monsters`: This component fetches and displays all the monsters as a list of clickable images.
`MonsterStats`: This component displays detailed stats for each monster. The monster data is fetched from the Breath of the Wild Compendium API.
`Request`: This component contains a form that allows users to submit a request for a new monster to be added.

In addition to these, there is the main `App` component that uses React Router to switch between the different pages.

## Usage

To run the application in development mode, use the following commands:

1. Install all the required packages/dependencies using npm
```bash
npm install
```

2. Run the app in a development mode
```bash
npm start
```
3. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits, but only when the local host is active.


## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like.

## License

[MIT](https://choosealicense.com/licenses/mit/)
