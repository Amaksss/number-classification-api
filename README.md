# number-classification-api

## Table of Contents
1. [Project Description](#Project-Description)
2. [Installation](#installation)
3. [API Documentation](#api-documentation)
4. 

   

## Project Description
This is a simple API that takes a number and returns interesting mathematical properties about it, along with a fun fact. 

The API is built using Nodejs and Express and is deployed to a publicly accessible endpoint.

## Features
- Supports GET requests
- Returns response in JSON format
- Handles cors (Cross-Origin Request Sharing)
- Fast response time (<500ms)

## Getting started

### Pre-requisites
- Nodejs

### Installation
1. Clone the repository
 git clone https://github.com/Amaksss/number-classification-api.git
 cd number-classification-api

2. Install dependencies
   npm install

3. Run the server
   node app.js
   By default, the server runs on http://localhost:3000/api/hng12

### API Documentation

## Endpoint 

- **GET**
    - **Endpoint**: `http://localhost:3000/api/classify-number?number=153`
    - **Method**: GET
    - **Description**: Classify the number.
    - **Response Format**: Success (200 OK)
        ```json
        {
          "number": 153,
          "is_prime": false,
          "is_perfect": false,
          "properties": [
              "armstrong",
              "odd"
              ],
          "digit_sum": 9,
          "fun_fact": "153 is a narcissistic number."
      }
        ```

## Error Handling
If an invalid route is requested, the API returns
{
  "number": alphabet,
  "error": true
}

### Deployment
The app is deployed at https://number-classification-api-65ol.onrender.com/api/classify-number?number=153



### Technologies Used
- Nodejs for Backend runtime
- Expressjs for Web framework
- CORS to handle cross origin requests
- GitHub for Version Control

## License
This project is available under the MIT License.
