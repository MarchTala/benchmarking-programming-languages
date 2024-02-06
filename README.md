# Benchmarking Programming Languages with MySQL Database Abstraction

This repository contains a benchmarking project comparing the performance of various programming languages with MySQL as the backend database.

## Introduction

This project aims to compare the performance of different programming languages when interacting with a MySQL database. Each programming language has been implemented using a simple REST API to retrieve data from the database, and benchmarks have been conducted to measure response times for different numbers of records.

## Project Structure

The project is organized into separate folders for each programming language. Each folder contains the code for the corresponding implementation.

- `expressjs`: Node.js with Express.js framework
- `fastify`: Node.js with Fastify framework
- `golang`: Go programming language
- `laravel_10`: Laravel PHP framework (Direct DB Access and Eloquent ORM)
- `nestjs`: Nest.js framework for Node.js
- `python_flask`: Python with Flask framework

## Technologies Used

- **MySQL**: The relational database used for storing benchmark data.
- **Programming Languages**:
  - JavaScript (Node.js)
  - Go
  - PHP (Laravel)
  - Python
- **Frameworks**:
  - Express.js
  - Fastify
  - Laravel
  - Nest.js
  - Flask

## Benchmark Results

Below are the results of the benchmark tests conducted for each programming language:

| Programming Language       | Response Time (100k rows) | Response Time (500k rows) |
|----------------------------|---------------------------|---------------------------|
| Golang                     | 90 milliseconds           | 399 milliseconds          |
| Laravel (Direct DB Access) | 135 milliseconds          | 550 milliseconds          |
| Express.js                 | 210 milliseconds         |                           |
| Fastify                    | 198 milliseconds         |                           |
| Nest.js                    | 220 milliseconds         |                           |
| Laravel (Eloquent ORM)     | 450 milliseconds         | 3.0 seconds               |
| Python (Flask)             | 750 milliseconds         | 3.56 seconds              |

**Note:** These results are based on testing conducted on a MacBook M1 Pro Max. Your results may vary depending on the specifications and configuration of your system. Different hardware, network conditions, and database configurations can impact performance. Therefore, please interpret these results with that in mind and understand that your experience may differ.

## Running the Code

### Express.js

1. Navigate to the `expressjs` folder.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

### Fastify

1. Navigate to the `fastify` folder.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

### Golang

1. Navigate to the `golang` folder.
2. Build the executable using `go build server.go`.
3. Run the executable using `./server`.

### Laravel (Direct DB Access)

1. Navigate to the `laravel_10` folder.
2. Install dependencies using `composer install`.
3. Start the server using `php artisan serve`.

### Laravel (Eloquent ORM)

1. Navigate to the `laravel_10` folder.
2. Install dependencies using `composer install`.
3. Start the server using `php artisan serve`.

### Nest.js

1. Navigate to the `nestjs` folder.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

### Python (Flask)

1. Navigate to the `python_flask` folder.
2. Install dependencies using `pip install -r requirements.txt`.
3. Start the server using `python server.py`.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. Be sure to follow the contribution guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the MIT License.
