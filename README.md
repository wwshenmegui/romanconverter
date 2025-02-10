# RomanConverter

## Introduction

This app is a web application which will convert an integer ranging from 1-3999 to its corresponding Roman numeric. For example, when you type 3000 in the input field and click the button, the web page will output MMM as the corresponding Roman numeric. 

This project completed extension 1, 2 and 3.

# How to build and run the app

## Prerequisites

- Node.js (v16 or higher): [Download and install Node.js](https://nodejs.org/en)
- Docker (recommended): [Download and install Docker](https://www.docker.com/products/docker-desktop/)

## Setup Instructions

1. Clone the repository
```
git clone romanconverter
cd romanconverter
```

2. Install dependencies

Note: You can skip this step and step 3 if you choose running applications on Docker containers and just go to step 4

```
cd <project_root_dir>/backend
npm install
cd <project_root_dir>/frontend
npm install
```

3. Start the server

- To start the backend server
    ```
    cd <project_root_dir>/backend
    npm start
    ```
- To render the frontend page
    ```
    cd <project_root_dir>/frontend
    npm start
    ```

4. Running application on Docker

Make sure Docker is correctly installed. Run these commands to run applications on Docker container.

```
cd romanconverter
docker-compose up --build
```

After the application is built and running on the Docker, navigate to http://localhost:3000/ and you will see the frontend page.

## Run Tests

To run all unit tests and integration tests for backend, run
```
cd <project_root_dir>/backend
npm test
```

For frontend, run
```
cd <project_root_dir>/frontend
npm test
```


# Engineering and Testing Methodology

## Backend

### Engineering

- Separation of Concerns: The application is divided into three main parts: the core Roman numeral logic under `services` folder, the API routes under `routes` folder and the server logic (server.js).
- Scalability: The code is modular and can be extended to handle additional endpoints or integrate more complex business logic.
- Input Validation: The API validates query parameters to ensure that only integers within the valid range (1 to 3999) are processed.
- Error Handling: The API provides meaningful error messages for invalid inputs or queries.

### Testing

1. Unit Testing:

The integerToRoman function is tested with various input cases, including edge cases (e.g., 0, negative numbers, and large numbers).

2. Integration Testing: Tools like Supertest can be used to test the /romannumeral endpoint.

3. Test Cases Covered:

    - Typical conversions (e.g., 1 → "I", 1994 → "MCMXCIV").
    - Boundary cases (e.g., 3999).
    - Invalid inputs (e.g., non-numeric or out-of-range integers).

## Frontend

### Engineering

The frontend of this application is built using React and Adobe React Spectrum for consistent design, accessibility, and theming. The following principles were followed during the engineering process:

1. Component Modularity:

Components such as InputField, ConvertButton, and DisplayField are separated into their own modules to ensure reusability, maintainability, and testability.
Each component handles a single responsibility

2. Theming:

The app dynamically adjusts to the user's system theme (light or dark mode) using the prefers-color-scheme media query.

Adobe React Spectrum's Provider is used for theming and accessibility, ensuring a seamless user experience across different devices.

3. State Management:

Local state (useState) is used for simplicity and to manage the user’s input and the converted Roman numeral output.

4. Error Handling:

Errors such as invalid input or network failures are gracefully handled and communicated to the user via the DisplayField component.

### Testing

The testing strategy for the frontend focuses on both unit and integration tests to ensure reliability, correctness, and seamless user experience.

1. Unit Testing:

Each component is tested independently using React Testing Library to validate its behavior in isolation.

For example:
InputField is tested to ensure it renders correctly and calls the onChange handler.
ConvertButton is tested for correct rendering and click interactions.
DisplayField is tested to ensure the correct output is displayed.

2. Integration Testing:

Tests cover how components interact with each other and simulate the end-to-end user flow:
Input a number, click the "Convert" button, and verify the displayed Roman numeral.
Integration tests also validate proper handling of API responses (successful conversion or error messages).

# Package Layout

The project directory structure is organized as follows:

```
romanconverter/
│
├── backend/               # Backend source code
│   ├── src/               # Backend implementation
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── utils/         # utility functions (e.g. logger)
│   │   └── server.js      # Entry point for backend server
│   │
│   ├── tests/             # Backend tests
│   │   ├── unit/          # Unit tests for services and utils
│   │   └── integration/   # Integration tests for routes
│   │
│   ├── package.json       # Backend dependencies
│   └── README.md          # Instructions for backend
│
├── frontend/              # Frontend source code
│   ├── src/               # React app implementation
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page-level components
│   │   ├── styles/        # CSS or SCSS files
│   │   ├── App.js         # Main React component
│   │   └── index.js       # Entry point for React
│   │
│   ├── tests/             # Frontend tests
│   │   ├── unit/          # Unit tests for components
│   │   └── integration/   # Integration or E2E tests
│   │
│   ├── package.json       # Frontend dependencies
│   └── README.md          # Instructions for frontend
│
├── .gitignore             # Git ignore file
├── README.md              # Main README with overall project instructions
└── package.json           # Root-level dependencies

```

# Dependency Attribution

## Backend

The backend is built with Node.js and Express.js, and it utilizes the following dependencies:
1. express

- Description: Fast, unopinionated, minimalist web framework for Node.js.
- Purpose: Handles HTTP requests, routing, and middleware functionality.

2. dotenv

- Description: Loads environment variables from a .env file into process.env.
- Purpose: Simplifies configuration management and keeps sensitive data out of the source code.

3. nodemon (dev dependency)

- Description: Monitors for changes in the source code and automatically restarts the server.
- Purpose: Improves developer productivity during development.

4. jest (dev dependency)

- Description: JavaScript testing framework with a focus on simplicity and performance.
- Purpose: Used for writing and running unit and integration tests for the backend.

5. supertest (dev dependency)

- Description: Provides high-level HTTP assertions for testing APIs.
- Purpose: Enables integration testing of backend routes.

6. winston

- Description: Winston is a popular logging library for Node.js that allows structured logging with multiple transport options (console, file, external services).
- Purpose: It helps developers capture, format, and persist logs efficiently. It supports log levels, timestamping, JSON formatting, and integration with logging platforms like Logstash, AWS CloudWatch, and more.

7. prom-client

- Description: prom-client is a Prometheus client library for Node.js that enables applications to expose real-time metrics.
- Purpose: It helps monitor application performance by tracking HTTP requests, response times, error rates, and custom metrics, which can be visualized in Prometheus/Grafana.

## Frontend

The frontend is built with React and Adobe React Spectrum for a modern, accessible, and styled user interface. The following dependencies are used:

1. react

- Description: JavaScript library for building user interfaces.
- Purpose: Manages component rendering and state management.

2. @adobe/react-spectrum

- Description: Adobe's design system and React component library.
- Purpose: Provides accessible and customizable UI components such as Button, TextField, and View.

3. react-dom

- Description: Package that provides DOM-specific methods for React components.
- Purpose: Renders React components into the DOM.

4. @testing-library/react (dev dependency)

- Description: A library for testing React components in a way similar to how users interact with them.
- Purpose: Used for writing unit and integration tests for the frontend.

5. jest (dev dependency)

- Description: JavaScript testing framework.
- Purpose: Runs frontend tests alongside React Testing Library.

# Devops

Currently this project includes these devops capabilities
- healthcheck endpoint (/health) to check the health of server. This is to check whether the server is running or disconnected
- logging. This project has logging in backend logic including APIs
- Metrics. Right now we have a metric for the total number of requests. Hitting /metrics endpoint and you will see the metric info. This can be further polished by adding more metrics or visualizing them in Grafana. 
