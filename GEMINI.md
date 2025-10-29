# Project Overview

This is a full-stack e-commerce web application.

**Frontend:**
- **Framework:** React with Vite
- **Styling:** Bootstrap
- **Key Libraries:**
    - `react-router-dom` for routing
    - `axios` for HTTP requests
    - `react-bootstrap` for UI components

**Backend:**
- **Framework:** Spring Boot
- **Language:** Java 21
- **Database:** PostgreSQL
- **Security:** Spring Security
- **Key Libraries:**
    - `spring-boot-starter-data-jpa` for database access
    - `lombok` for reducing boilerplate code

# Building and Running

## Frontend (Client)

1.  **Navigate to the `client` directory:**
    ```bash
    cd client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Backend (Server)

1.  **Navigate to the `server/e-commerce-project` directory:**
    ```bash
    cd server/e-commerce-project/e-commerce-project
    ```
2.  **Build the project:**
    ```bash
    ./mvnw clean install
    ```
3.  **Run the application:**
    ```bash
    ./mvnw spring-boot:run
    ```

# Development Conventions

## Frontend

- The project uses ESLint for code linting. Run `npm run lint` to check for issues.
- Components are located in `src/components`.
- The main application entry point is `src/main.jsx`.

## Backend

- The project follows the standard Spring Boot project structure.
- Controllers are in `src/main/java/com/tarungattu/e_commerce_project/controllers`.
- Models are in `src/main/java/com/tarungattu/e_commerce_project/models`.
- Repositories are in `src/main/java/com/tarungattu/e_commerce_project/repos`.
- Services are in `src/main/java/com/tarungattu/e_commerce_project/services`.
