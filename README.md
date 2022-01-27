# Open Source Contributions, Done's, Learnings and Challenges of Marco and Niclas

## Marco
**Open Source Contributions:**

- Developed and published deno module for checking if a number is a prime number
    
    ([isprime@v1.1.0 | Deno](https://deno.land/x/isprime@v1.1.0))

**Done**

- Developed whole web application using the svelte compiler
- Setup of project structure including all folders and all files (component-oriented with to possibility of sub-components)
- Designed and implemented routing concept with the Svelte SPA-Router
- Developed complete frontend (HTML, CSS) including whole functionality (Typescript) of the following pages
    - Landing page (informs the user about the product)
    - Signup page (offers the possibility to register a new organizer)
    - Signin page (offers the possibility to login as a organizer)
    - New events page (offers to possibility to create a new event as a organizer)
    - Insights page (offers possibility to gain insights into released events via multiple charts)
    - MyEvents page (offers possibility to see all events and filter for them)
    - MyEvents Details page (offers possibility to see descriptive details and insights via charts of a specific event)
    - Responsive Navigation bar
- Dived into and worked a lot with the following svelte features
    - svelte store (to have a proper State-Management for storing centralised variables)
    - Input bindings (to bind variables to input fields)
    - Property bindings (to pass values to other components)
    - Component lifecycle (used “onMount” to load data at birth time of component)
    - Transitions (used fade in and out for a better and smoother user experience)
    - logic blocks (if, each, await as HTML elements)
- Developed a complete wizard for the organizer to create new events with the following features
    - progress bar to show the progress
    - input validation to be only able to proceed when inputs are valid
    - Datetime picker to have a nice way for selecting a event date
    - Time picker to have a nice way for selecting a time for starter, main, dessert
    - Modal box for confirmation when event was created successfully or event creation failed
- Dived into Visualization and implemented multiple charts (bar, line,...) using “frappe charts”
- Development of OOP Typescript modules for performing API requests to the deno backend
    - Http.ts (Consumed by other modules to perform easily http calls without using the wrong address and forgetting to use token)
    - Event.ts (Consumed by multiple svelte components to perform CRUD operations on Events in the backend)
    - User.ts (Consumed by multiple svelte components to perform CRUD operations on Organizers in the backend)
    - Stats.ts (Consumed by Charts to show data which is pulled from the backend)
- Used localstorage of the browser to persist data (avoid loss of jwt token when reloading the website)
- Used bootstrap framework to achieve responsive design
    - customised bootstrap theme via scss compiler to override plenty of scss variables to fit it to our needs
- Implemented event search on page “MyEvents” which offers to user a possibility to search for event names
    - I complemented this user experience with a “switch”, which can be used to show all events (also past ones) or only upcoming events
- Developed visual presentation and integration of a fully functional chatbot using state of the art NLP AI, which I have trained to answer FAQ’s of a (future) organizer (Dialogflow)

**Challenges**

- Create charts with dynamic values coming from the backend
- Bootstrap theme customization
- Implementation of a wizard, which allows an organizer to create new events
- Implementation of dedicated date and time picker for a better user experience
- Implementation of a possibility for the organizer, to draw a rectangle of possible geographical participations on Google Maps

**Learnings**

- Got to know Svelte as a framework including its features
- Working with deno as runtime environment
- Improved typescript skills
- Improved HTML and CSS knowledge
- Increased Bootstrap knowledge
- How to use local storage to persist data in the browser
- How to integrate Google Maps and allow the user to draw a rectangle on the Map (different project)
- How to write a deno module and how to publish it on deno.land

## Niclas