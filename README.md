# GREENMARK!T
### an app for Farmers' Markets (especially Union Square)<br />


## Project Description
GreenMark!t will provide an organized way to view and track the Union Square Greenmarket and its vendors.

Some challenges likely to be faced are:
- Auth. We'll aim to resolve this by... working hard to figure it out? Ideally the app will include a users section and a vendors section, where the users can favorite vendors and/or produce types, and the vendors can update their information and share what produce they're really pumped to bring. Therefore we'll have to implement restricted views and associated profiles.
- i dunno what else

MVP will look like: a CRUD-fulfilling database and front-end to track vendors, with searchability.
POST-MVP will look like: a website with vendor login and user login, a map to display vendor locations in the market, and a calendar of events. POST-POST-MVP may expand to other farmers markets, though possibly in less detail.

## Feature List




## Entity Relationship Diagram
(vendors, produce, days: vendors:produce = one-to-many; vendors:days = many-to-many)



## API Documentation
(a list of server routes, structure of requests, structure of responses)



## Wireframes
<img width="1037" alt="Screen Shot 2019-05-12 at 11 27 36 AM" src="https://user-images.githubusercontent.com/47368206/57629707-3c4a5b80-756a-11e9-977d-bd3739f2e33e.png">
<img width="1031" alt="Screen Shot 2019-05-12 at 1 02 59 PM" src="https://user-images.githubusercontent.com/47368206/57629733-49674a80-756a-11e9-8905-38b5a0831cce.png">
<img width="1028" alt="Screen Shot 2019-05-13 at 10 33 39 AM" src="https://user-images.githubusercontent.com/47368206/57629996-ce526400-756a-11e9-9351-82dfb3ee919b.png">
<img width="1023" alt="Screen Shot 2019-05-12 at 1 17 52 PM" src="https://user-images.githubusercontent.com/47368206/57630007-d3afae80-756a-11e9-9859-60da9ae52c44.png">
<img width="1031" alt="Screen Shot 2019-05-12 at 2 38 53 PM" src="https://user-images.githubusercontent.com/47368206/57630013-d7433580-756a-11e9-9268-5297b35e901c.png">



## Component Hierarchy
![IMG_20190513_103849](https://user-images.githubusercontent.com/47368206/57630348-71a37900-756b-11e9-8db8-9a39a0cd0c7f.jpg)


## Dependencies
express, react, axios, pg, sequelize, cors, body-parser
morgan, eslint, nodemon (dev dependencies)
