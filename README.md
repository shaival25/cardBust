# Card Bust

Card Bust is a powerful web application designed to create and manage flashcards, enhancing learning and memorization processes.

## Key Features

- **Manual Creation Option**: Create your manual cards
- **Flashcard Management**: Easily view and edit your flashcards
- **Intuitive User Interface**: Easy navigation and user-friendly experience

## Tech Stack

### Frontend

- React with Vite

### Backend

- Node.js and Express.js

### Database

- MySQL for structured data storage
- Redis for caching and performance optimization

## File Structure

```
|-- backend
|     -- src
|       |-- config
|       |-- controllers
|       |-- middlewares
|       |-- migrations
|       |-- models
|       |-- routes
|       |   `-- v1
|       |-- seeders
|       `-- services
|-- frontend
    |-- dist
    | -- src
        |-- components
        |-- hooks
        |-- pages
.github
  -- workflows
```

## Setting up project

### Install dependencies

- Move to frontend folder and run the command - `pnpm install`
- Moce to backend folder and run the command - `pnpm install`

### Setup ENV File

- Backend
  ```
    DB_USERNAME=
    DB_PASSWORD=
    DB_DATABASE=
    DB_HOST=
    DB_PORT=
    REDIS_USERNAME=
    REDIS_PASSWORD=
    REDIS_HOST=
    REDIS_PORT=
    NODE_ENV=development | test | production
  ```
- Frontend

```
    VITE_BACKEND_URI=http://localhost:3000
```

### Run your backend and frontend server

- cd to backend `pnpm run dev`
- cd to frontend `pnpm run dev`
