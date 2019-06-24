# POPULATION-MANAGEMENT-API

The API functionalities of POPULATION-MANAGEMENT-API

## Technologies Used
- Node.js/ExpressJS (Server Side)
- MongoDB

## Prerequisites
The following should be installed in your machine
- Node v10.13.0
- MongoDB

## How To Install And Run The Application
* Clone this Repo and `cd` into it
* Install all the dependancies by running the `yarn install`
* Ensure to setup  `MONGODB on your local machine`
* Create a `.env` file and request for values from ADMIN
* Substitute all these values `LOCAL_DB_URL`, `TEST_DB_URL` and `NODE_ENV`, with the values used to setup MongoDB on your local machine
* Start the application on development mode by running `yarn dev`

## API FEATURES ##

- Users can add population information
- Users can fetch all population information
- Users can get a population information
- Users can delete a population information
- Users can update population information

## API ENDPOINTS ##
<table>
    <tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th><th>QUERY</th></tr>
    <tr><td>GET</td><td>/api/v1/population</td><td>Gets list of population information</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/population/:location</td><td>Gets a population information</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/population</td><td>Add a population information</td><td></td></tr>
    <tr><td>DELETE</td><td>/api/v1/population/:location</td><td>Delete a Population Information</td><td></td></tr>
    <tr><td>PUT</td><td>/api/v1/population/:location</td><td>Update Population Information</td><td></td></tr>
</table>