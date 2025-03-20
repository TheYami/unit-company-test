# Project Name

Description of the project: A job application test submission for Unit Co., Ltd. It includes UI implementation with HTML & CSS, PIN validation with JavaScript, and a set of APIs built with Node.js/Express for managing hotel data.

## Technologies Used:
- HTML
- CSS
- JavaScript
- Node.js
- Express

## Features:
- UI for phone number and PIN validation
- APIs for creating, listing, searching hotels

## Installation:
1. Clone the repository:
    ```bash
    git clone https://github.com/TheYami/unit-company-test.git
    ```

2. Install dependencies:
    ```bash
    cd unit-company-test
    npm install
    ```

3. Run the server:
    ```bash
    npm start
    ```

## API Documentation:
### POST /api/create/hotel
- **Request Payload**: `{ name: "Hotel Name", price: 2500 }`
- **Response**: Success message with the created hotel data.

### GET /api/listhotel/:id
- **Request**: Retrieve a list of hotels by ID.

### POST /api/search/hotel
- **Request Payload**: `{ date: "YYYY-MM-DD" }`
- **Response**: List of hotels available on the given date.

## Testing:
To test the application:
1. Run the app with `npm start`.
2. Test the functionality using the provided UI and API endpoints.
