<br/><br/>
<br/><br/>

<p align="center">
    <img height="100" src="https://www.alkemy.org/assets/images/logo-header.png">
   </p>
   
   
   <br/><br/>
    
   
   ![GitHub package.json version](https://img.shields.io/github/package-json/v/julioale21/alkemy-superheroes-challenge?color=blue)
   ![GitHub language count](https://img.shields.io/github/languages/count/julioale21/alkemy-superheroes-challenge?color=blue)
   ![GitHub top language](https://img.shields.io/github/languages/top/julioale21/alkemy-superheroes-challenge)
 
   
   <br/><br/>
   

   <h1 align="center">Superheros App - Alkemy Challenge</h1>
   
   
### [📖 Go to CHANGELOG.md to see the changelog](CHANGELOG.md)

  
## The challenge

Develop an application to create a team of superheroes that will consume an external API and
it will show different attributes at the individual level of each member and of the consolidated team.

👉 Consume the endpoints of the following API to perform the different operations. You shall
authenticate with Facebook to make requests to it.

👉 Additionally, the different sections that the app will have must be protected by verifying that the
authenticated user has a token that will be stored in localStorage. 
It will be obtained of an API with sample data. If a user tries to enter any route without being authenticated,
he must be redirected to login

👉 To handle HTTP requests, the Axios library must be used.

👉 The site must be responsive, and use Bootstrap as a starting point to take advantage of the
library features.

### Functional requirements
The Home screen should show, in addition to the team members:
  - Cumulative of powerstats, grouped by each one, that is: total sum of intelligence, strength, etc. of all individual team members.
  - The most cumulative powerstat should appear above to categorize the type equipment (intelligence, strength, etc.).
  - Average team height and weights.
  - The team must have 6 members. There should be 3 members with good orientation and 3 with bad orientation. This needs to be validated when trying to add a new hero.
  - It should be possible to remove a member of the team, which will generate a new average of weight, cumulative of powerstats, etc.

### Technical requirements
Taking advantage of React's features, the following sections should be created in reusable components.

#### 1. Login Form
The form must be rendered when entering any path if the user is not authenticated, containing the fields:
  - Email.
  - Password.
  - Send Button.

By clicking on "Send", you must validate that both fields are not empty, and display a message to the user if they were. 
Otherwise, a POST request must be made to the following url, with the email and password fields in the body.

The valid data to obtain a token are:
  - Email: challenge@alkemy.org
  - Password: react
  
In the case of getting an error from the API, an alert should be displayed, while if it is successful you will need to redirect to Home and store the obtained token in localStorage.
Form validations must be carried out using the Formik library

#### 2. Team
The Home of the application will show the team members in a list on a grid. Each item of the listing will contain:
  - Hero name.
  - Name
  - Powerstats.
  - Actions to view the detail or remove it from the team.

#### 3. Heros search
To add a hero to your team, you will need to display a form that makes a GET request to the search endpoint and display the available results in a grid. Those results should
show:

  - Hero name.
  - Hero image.
  - Actions to add a hero to your team

Form validations must be performed using the Formik library.

#### 4. Hero Detail
Clicking on a team hero will display the details listed on the endpoint. From them,show: 

  - height, 
  - full name, 
  - aliases, 
  - eye color,
  - hair color, 
  - workplace.

### Tests
Optionally, unit tests can be added to validate the elements of the app:
- Authenticated user verification when entering a route.
- Field validation in login or search form submit.
- Handling exceptions when getting API errors.

For the implementation of the tests, Jest and React Testing Library libraries should be used.

### Criteria to evaluate
- Responsive, modern and intuitive design.
- You must use Bootstrap to allow the project to be responsive, and media queries for the custom elements that are developed.
- Basic knowledge of React.
- Form validation using the Formik library.
- Good coding practices.
- Good practices for route names.
- Modularized code in reusable and independent components.


## Demo
[https://alkemy-superheroes-challenge-5os7z4jsx-julioale21.vercel.app/home](https://alkemy-superheroes-challenge-5os7z4jsx-julioale21.vercel.app/home).

To be able to do login on demo you must allow cors in your browser and configure the site as secure.

Go padlock in url box

Go to site configuration.

Go to unsafe content

Check allow option.

## Project

### Tools

- React.js
- Vite.js
- Bootstrap
- Formik
- Yup
- AOS animation
- React-toats-notification
- React-countup
- Axios
- Release-it

### Project Structure
The files are structured as follow:

    .
    ├── public              # Static Files
    ├── src
        ├── assets          # App resources like images
        ├── components      # Stateless components
        ├── Context         # Global state  
        ├── models          # Entities
        ├── screens         # Pages that make up the app 
        ├── services        # Set of software functionalities that different clients can reuse for different purposes
        ├── types           # custom types
        App.css
        App.tsx
        main.tsx
    ├── CONTRIBUTING.md      # Document the conventions used in this project.
    └── README.md            # The first page that the user will view when will visit the repository.

## Requirements
* npm or yarn
* Git

## Local deployment

* Clone repository.
* Execute the command `npm install`
* add .env file and the current variable VITE_SEARCH_URL=https://superheroapi.com/api/10222145357517937/search/
* Execute the command `npm run dev`

  
