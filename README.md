TO DO IT



JEREMY KOLKER'S UNIT TWO RESTFUL FULLSTACK CRUD APP
"TO-DO IT!" is a digital list-maker/organizer/calendar app. 

LANGUAGES FRAMEWORKS and DBs USED:
Javascript (including jQuery & EJS), CSS Bootstrap, HTML, Node, Express, MongoDB.

All of our server-side code exists in the server.js file. 

-At least 9 server route requests were made, including 7 REST routes. 
-Server.JS is connected to a directory of js files: "Models" and a directory of EJS files: "Views". 

Models:

-Schema.JS establishes the key values of our list objects. Standard to-do list where/when/how's. We export the module of data as "Todoit", which is how we will refer to our database collection. 
-SEED.JS is the first collection of data seeded to our mongo database.
-Calendar.JS holds the majority if the JS for our calendar page, which generates a current/up-to-date daily/weekly/monthly calendar as a rendered HTML table on our page.

Views:

-Index.ejs is representative of our homepage, containing the master to-do list, a collapsable menu with links to each section on the site, and a search field that allows the user to sort through tasks.
-New.ejs contains the code for our Add To-Do Task Item page. It consists of some basic html, a form that uses a post route to receive user input and add to our existing database.
-Edit.ejs contains the code for our Edit task page. Very similar to our new.ejs but allows the user to update an existing task/item rather than creating one. Includes a feature that allows the user to mark the item as complete, which triggers a green check mark next to the task on our master list.
-Calendar.ejs contains the code for our Calendar page. It consists of a responsive nav bar, a function that tracks and displats the current date, a navigable daily-monthly-yearly calendar, where each date is a hyperlink to it's own unique page. 
-Day.ejs contains the code for the specific date page. Each date in the calendar on our calendar redirects to a specific url that is generated by this ejs. 
-Search.ejs contains code that allows our search function to render on the home page. 


