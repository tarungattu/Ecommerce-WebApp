# E-Commerce Clone

This is a full-stack e-commerce web application built with React for the frontend and Spring Boot for the backend.

## Features

*   User authentication (login and registration)
*   Browse products
*   Add products to cart
*   View cart
*   Update products in cart
*   Checkout

## Technologies Used

### Frontend

*   **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
*   **Styling:** [Bootstrap](https://getbootstrap.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **HTTP Requests:** [Axios](https://axios-http.com/)
*   **UI Components:** [React Bootstrap](https://react-bootstrap.github.io/)

### Backend

*   **Framework:** [Spring Boot](https://spring.io/projects/spring-boot)
*   **Language:** Java 21
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **Security:** [Spring Security](https://spring.io/projects/spring-security)
*   **ORM:** [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
*   **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or later)
*   [Java](https://www.java.com/) (v21 or later)
*   [Maven](https://maven.apache.org/)
*   [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2.  **Navigate to the `client` directory and install dependencies:**

    ```bash
    cd client
    npm install
    ```

3.  **Navigate to the `server/e-commerce-project` directory and build the project:**

    ```bash
    cd ../server/e-commerce-project/e-commerce-project
    ./mvnw clean install
    ```

### Running the Application

1.  **Run the frontend development server:**

    ```bash
    cd client
    npm run dev
    ```

2.  **Run the backend application:**

    ```bash
    cd server/e-commerce-project/e-commerce-project
    ./mvnw spring-boot:run
    ```

## Project Structure

### Frontend

*   `src/components`: React components
*   `src/Context`: React context for state management
*   `src/App.jsx`: Main application component
*   `src/main.jsx`: Application entry point

### Backend

*   `src/main/java/com/tarungattu/e_commerce_project/controllers`: REST API controllers
*   `src/main/java/com/tarungattu/e_commerce_project/models`: JPA entity models
*   `src/main/java/com/tarungattu/e_commerce_project/repos`: Spring Data JPA repositories
*   `src/main/java/com/tarungattu/e_commerce_project/services`: Business logic services
*   `src/main/java/com/tarungattu/e_commerce_project/security`: Spring Security configuration
*   `src/main/resources/application.properties`: Application configuration
