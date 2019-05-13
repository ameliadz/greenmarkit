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




## Component Hierarchy



## Dependencies
express, react, axios, pg, sequelize, cors, body-parser
morgan, eslint, nodemon (dev dependencies)
