import TrekLog from "./components/assets/Portfolio/Treklog.gif"
import BarkBuddies from "./components/assets/Portfolio/BarkBuddies.gif"
import BudgetApp from "./components/assets/Portfolio/BudgetApp.gif"
import Ecommerce from "./components/assets/Portfolio/Ecommerce.gif"
import FriendsList from "./components/assets/Portfolio/FriendsList.gif"

const Projects = [ 
{
    id: 0,
    name: "TrekLog",
    image: TrekLog,
    description: "I was the project lead on a team of 4 members, This monolithic app has full CRUD capabilities and utilizes RESTful routing. We used React front-end with Rails backend and a PostgreSQL database. We acheived 70% test coverage on Jest and RSpec.",
    link: "https://treklog.onrender.com/",
    alt: "Image of Treklog being used"
},
{   id: 1,
    name: "BarkBuddies",
    image: BarkBuddies,
    description: "This decoupled app was created with a React front end and a Rails backend. Devise was implemented for user authentication. ",
    link: '',
    alt: "Image of BarkBuddies being used"
},
{
    id: 2,
    name: "BudgetApp",
    image: BudgetApp,
    description: "This React app was created to better understand React hooks such as useContext, useEffect and useReducer along with React Formatter.",
    alt: "Image of BudgetApp being used"
},
{
    id: 3,
    name: "Ecommerce Store",
    image: Ecommerce,
    description: "React app created utilizing styles and components such as Material-UI, Material-UI Grid, Material-UI Button, developed without the use of CSS files and relied on styled-components library to style the components.",
    link: '',
    alt: "Ecommerce Store walkthrough"
},
{
    id: 4,
    name: "Friend's List",
    image: FriendsList,
    description: "Ruby on Rails Application created to better understand the use of bootstrap on the MVC architecture of Rails and uploading DB's to Render to support a live application. Application supports full CRUD functionality, along with filters between different accounts. App is Live until September 14.",
    link: 'https://friends-list-q2pi.onrender.com',
    alt: "Friend's list walkthrough"
}

]


export default Projects