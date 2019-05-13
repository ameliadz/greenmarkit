# GREENMARK!T
### an app for Farmers' Markets (especially Union Square)<br />


## Project Description
GreenMark!t will provide an organized way to view and track the Union Square Greenmarket and its vendors.

Some challenges likely to be faced are:
- Auth. We'll aim to resolve this by... working hard to figure it out? Ideally the app will include a users section and a vendors section, where the users can favorite vendors and/or produce types, and the vendors can update their information and share what produce they're really pumped to bring. Therefore we'll have to implement restricted views and associated profiles.
- Connecting the backend to the front-end. This will be solved by working diligently with plenty of forethought and testing. And referring to every lesson on the subject.
- Git workflow. We'll aim to avoid conflicts by communicating frequently, tracking our branches, and working in the same room whenever possible.

MVP will look like: a CRUD-fulfilling database and front-end to track vendors, with searchability.<br />
POST-MVP will look like: a website with vendor login and user login, a map to display vendor locations in the market, and a calendar of events. POST-POST-MVP may expand to other farmers markets, though possibly in less detail.

## Feature List
- Vendor sign-up & log-in. 
- Vendor product list. Can be changed depending on what they have available that day/week.
- Ability to change hours/days. 
- Ability to search vendors by product type.



## Entity Relationship Diagram
![Image from iOS](https://user-images.githubusercontent.com/47397924/57635739-c0561080-7575-11e9-9516-35e9aa338aa9.jpg)



## API Documentation


```
New Vendor Account
app.post('/vendor/register', (request, response) => {
    //vendor enters email and password to create new account
})

Vendor Login
app.get('/vendor/login/:username', (request, response) => {
    //vendor enters username and password
    //credentials are checked and they are allowed access if password is correct
    //user is given a temporary login token
})

New User Account
app.post('/user/register', (request, response) => {
    //user enters email and password to create new account
})

User Login
app.get('/user/login/:username', (request, response) => {
    //user enters username and password
    //credentials are checked and they are brought to their profile if correct
    //user is given a temporary login token
})

New Product List
app.post('/vendor/:username/products', (request, response) => {
    //creates appropriate database entries for products associated with that vendor    
})

Update Vendor Product Database
app.put('/vendor/:username/products', (request, response) => {
    //updates the vendor's database entries
})

Search For Particular Vendor Information
app.get('/vendorlist/:name', (request, response) => {
    //search for vendor using .findOne() and filtering by name    
    //returns the user schedule, location, and products sold
})

Search For Vendor By Filters
app.get('/vendorlist/??? ', (request, response) => {
    //search for vendors by products sold, schedule, etc.
    //this would use .findAll() and filter by user input using WHERE {}
})

Update Vendor Schedule
app.put('/vendor/:username/schedule'), (request, response) => { 
    //makes changes to the vendors schedule (only accessible if they have the login token)
})

Update User's Favorites 
app.put('/user/:username/favorites', (request, response) => {
    //updates the user's favorites
})

Delete Vendor Account
app.delete('/vendor/:username', (request, response) => {
    //deletes the vendor's account
})

Delete User Account
app.delete('/user/:username', (request, response) => {
    //deletes the vendor's account
})
```




## Wireframes
<img width="1037" alt="Home" src="https://user-images.githubusercontent.com/47368206/57635230-c0094580-7574-11e9-9e72-1d47710dfd7e.png">
<img width="1031" alt="AllVendors" src="https://user-images.githubusercontent.com/47368206/57635229-c0094580-7574-11e9-85d6-4dae25200ea4.png">
<img width="1028" alt="VendorProfile" src="https://user-images.githubusercontent.com/47368206/57635233-c0a1dc00-7574-11e9-9574-c49cb5ef8195.png">
<img width="1023" alt="Maps" src="https://user-images.githubusercontent.com/47368206/57635231-c0094580-7574-11e9-8371-eb702ad0f761.png">
<img width="1029" alt="VendorDashboard" src="https://user-images.githubusercontent.com/47368206/57635232-c0a1dc00-7574-11e9-9db2-f0af61601168.png">
<img width="1029" alt="VendorSignUp" src="https://user-images.githubusercontent.com/47368206/57635234-c0a1dc00-7574-11e9-8b72-9841856a09a9.png">



## Component Hierarchy
![IMG_20190513_113600](https://user-images.githubusercontent.com/47368206/57635078-81738b00-7574-11e9-8d26-854fd6a508cb.jpg)


## Dependencies
Express, React, axios, pg, Sequelize, cors, body-parser <br />
morgan, ESLint, Nodemon (dev dependencies)

## Trello Link
https://trello.com/b/w0Cf4Vcv/greenmarkt
