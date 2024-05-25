This project is an upgraded version of a previous project here https://github.com/depermana12/nontonflix that used only vanilla JavaScript. It now utilizes Node.js and Express for the backend, along with server-side rendering (SSR)

# NontonFlix

The NontonFlix Application is a server-side rendered (SSR) web application built using Node.js and Express.js. It utilizes the TMDb API to fetch movie and TV show data, allowing users to search, browse, and view detailed information about various titles.

EJS templates are used for server-side rendering, allowing dynamic HTML content generation based on data fetched from the backend.

## Setup and Installation:

1. Clone the project repository from GitHub.
2. Install dependencies using `npm install`.
3. Sign up for a TMDb account and obtain an API key here https://www.themoviedb.org/
4. Create a `.env` file and add your TMDb API key.
``` 
API_KEY=your api
API_URL=https://api.themoviedb.org/3/
```

5. Run the server using `npm start`
