# TV shows app

This is a TV Shows app built using Vue 3 and Vite. The app fetches TV Show data from the [TVmaze API](http://www.tvmaze.com/api) and displays them in a user-friendly interface.

## Features

- Browse TV Shows: Users can browse through a list of popular TV Shows, view their details and episodes list.
- Search for TV Shows: Users can search for TV Shows by name and view details of their favorite TV Shows.
- Horizontal Scrolling: TV Shows are grouped by genres, sorted by ratings and shown in an horizontal list to make it mobile friendly
- Web and mobile friendly user interface

## Technologies Used

- Vue 3: A progressive framework for building user interfaces
- Vite: A fast and lightweight development server
- Axios: A promise-based HTTP client for the browser and Node.js
- Jest: Unit testing the vue components

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/).

## Project Setup

1. Clone the repository from github:

```sh
git clone https://github.com/your-username/tv-shows-app.git
```

2. Install the dependencies

```sh
npm install
```

3. Start the development server

```sh
npm run dev
```

4. Run unit tests

```sh
npm run test
```

### Build the app for production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## API Usage

This app uses the [TVmaze API](http://www.tvmaze.com/api) to fetch TV Show data. You can find the API documentation [here](https://www.tvmaze.com/api#show-main-information).
