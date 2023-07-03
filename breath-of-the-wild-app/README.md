# React Monster Compendium

This is a React application that displays information about monsters from the game "The Legend of Zelda: Breath of the Wild". It includes multiple components and utilizes styled-components for styling.

## Components
The application consists of the following:

1. `Home`: Renders the home page with a welcome message and a brief description.
2. `Monsters`: Displays a grid of monster images and names. Clicking on a monster will lead to its detailed stats page.
3. `MonsterStats`: Shows detailed information about a specific monster, including its name, image, description, and common locations.
4. `NavBar`: Provides navigation links to the home page, monsters page, and a request page.
5. `Request`: Allows users to submit a request for a new monster by entering its name and description.

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone <https://github.com/matthewmorganjoh/phase-2-project.git`>
2. Navigate to the project directory using cd
3. Install the dependencies: `npm install`

## Usage
To start the application, use the following command:

```
npm start

```

This will run the app in development mode and open it in your default browser at [http://localhost:3000](http://localhost:3000/). You can explore the different components and navigate through the app using the provided links.

Note: The application fetches monster data from an external API (https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters) to populate the `Monsters` component.