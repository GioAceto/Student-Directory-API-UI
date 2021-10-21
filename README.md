# Student-Directory API + UI

### [Demo this application](https://student-directory-api-ui.herokuapp.com/)

## Objective
The objective of this project was to create a full CRUD REST API for a student directory, as well as a frontend to render the information.

## Structure & Functionality
This API utilizes a MySQL database to store the student information, as well as a Pug frontend for the rendering.

The database contains a single table with 10 columns (id, name, age, address, gpa, major, image, createdAt, updatedAt, & deletedAt). The application uses the Sequelize ORM to connect to the database and it is then parsed into JSON format.

The frontend of the application utilizes the Pug template-engine as well SCSS for styling. All images used are svgs saved within the assets folder of the repo.

![Screen Capture GIF of student directory](public/assets/screen-capture.gif)

## API Documentation

The following HTTP methods are implemented: GET, POST, PUT, DELETE.

#### GET METHOD

http://localhost:1800/api/students

GET - Returns a list in raw JSON of all of the students and their information currently in the database.

    {
        "id": 1,
        "name": "Emily",
        "age": 20,
        "address": "Salem, MA",
        "gpa": "3.70",
        "major": "Biochemistry",
        "image": "emily.svg",
        "createdAt": "2021-09-28T17:23:44.000Z",
        "updatedAt": "2021-09-28T17:23:44.000Z",
        "deletedAt": null
    },

#### POST METHOD

http://localhost:1800/api/students

POST - Adds a new student to the database. A new Student ID is created in sequential order.

    {
        "id": 13,
        "name": "Robert",
        "age": 23,
        "address": "Miami, FL",
        "gpa": 3.2,
        "major": "Chemistry",
        "image": "robert.svg",
        "createdAt": "2021-09-28T17:23:44.000Z",
        "updatedAt": "2021-09-28T18:09:56.885Z",
        "deletedAt": null
    }

#### UPDATE METHOD

http://localhost:1800/api/students/000001

UPDATE - Updates a student currently in the databse based on the Student ID # being used as the param.

All of these properties are required to update: name, age, address, gpa, major, & image.

      {
      "id": 1,
      "name": "Emily",
      "age": 21,
      "address": "Salem, MA",
      "gpa": 3.8,
      "major": "Biochemistry",
      "image": "emily.svg",
      "createdAt": "2021-09-28T17:23:44.000Z",
      "updatedAt": "2021-09-28T18:09:56.885Z",
      "deletedAt": null
  }

#### DELETE METHOD

http://localhost:1800/api/students/000001

DELETE - Deletes a student currently in the database by Student ID # (which is the param). The id # works both with or without leading zeros when used as the param.

## To View the Front End Locally

http://localhost:3000/