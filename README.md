# GREENMARK!T
### an app for Farmers' Markets (especially Union Square)<br />


## Project Description
GreenMark!t will provide an organized way to view and track the Union Square Greenmarket and its vendors.

Some challenges likely to be faced are:
- Auth. We'll aim to resolve this by... working hard to figure it out? Ideally the app will include a users section and a vendors section, where the users can favorite vendors and/or produce types, and the vendors can update their information and share what produce they're really pumped to bring. Therefore we'll have to implement restricted views and associated profiles.
- Connecting the backend to the front-end. 
- Git workflow. 

MVP will look like: a CRUD-fulfilling database and front-end to track vendors, with searchability.
POST-MVP will look like: a website with vendor login and user login, a map to display vendor locations in the market, and a calendar of events. POST-POST-MVP may expand to other farmers markets, though possibly in less detail.

## Feature List
- Vendor sign-up & log-in. 
- Vendor product list. Can be changed depending on what they have available that day/week.
- Ability to change hours/days. 
- Ability to search vendors by product type.





## Entity Relationship Diagram
(vendors, produce, days: vendors:produce = one-to-many; vendors:days = many-to-many)



## API Documentation
(a list of server routes, structure of requests, structure of responses)



## Wireframes
<img width="1031" alt="AllVendors" src="https://user-images.githubusercontent.com/47368206/57635229-c0094580-7574-11e9-85d6-4dae25200ea4.png">
<img width="1037" alt="Home" src="https://user-images.githubusercontent.com/47368206/57635230-c0094580-7574-11e9-9e72-1d47710dfd7e.png">
<img width="1023" alt="Maps" src="https://user-images.githubusercontent.com/47368206/57635231-c0094580-7574-11e9-8371-eb702ad0f761.png">
<img width="1029" alt="VendorDashboard" src="https://user-images.githubusercontent.com/47368206/57635232-c0a1dc00-7574-11e9-9db2-f0af61601168.png">
<img width="1028" alt="VendorProfile" src="https://user-images.githubusercontent.com/47368206/57635233-c0a1dc00-7574-11e9-9574-c49cb5ef8195.png">
<img width="1029" alt="VendorSignUp" src="https://user-images.githubusercontent.com/47368206/57635234-c0a1dc00-7574-11e9-8b72-9841856a09a9.png">



## Component Hierarchy
![IMG_20190513_113600](https://user-images.githubusercontent.com/47368206/57635078-81738b00-7574-11e9-8d26-854fd6a508cb.jpg)


## Dependencies
express, react, axios, pg, sequelize, cors, body-parser <br>
morgan, eslint, nodemon (dev dependencies) />
