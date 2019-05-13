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
<img width="1037" alt="Home" src="https://user-images.githubusercontent.com/47368206/57633831-2ccf1080-7572-11e9-980a-6ea7168f2f00.png">
<img width="1031" alt="AllVendors" src="https://user-images.githubusercontent.com/47368206/57633832-2ccf1080-7572-11e9-90b0-fac27f7266ab.png">
<img width="1023" alt="Maps" src="https://user-images.githubusercontent.com/47368206/57633833-2ccf1080-7572-11e9-9bbd-c047ef4201a5.png">
<img width="1029" alt="VendorSignUp" src="https://user-images.githubusercontent.com/47368206/57633835-2ccf1080-7572-11e9-9e1e-a8c8629adafc.png">
<img width="1028" alt="VendorProfile" src="https://user-images.githubusercontent.com/47368206/57633836-2ccf1080-7572-11e9-82cc-435f317029d7.png">
<img width="1022" alt="VendorDashboard" src="https://user-images.githubusercontent.com/47368206/57633837-2ccf1080-7572-11e9-9af5-c256becdedef.png">



## Component Hierarchy
![IMG_20190513_113600](https://user-images.githubusercontent.com/47368206/57635078-81738b00-7574-11e9-8d26-854fd6a508cb.jpg)


## Dependencies
express, react, axios, pg, sequelize, cors, body-parser <br>
morgan, eslint, nodemon (dev dependencies) />
