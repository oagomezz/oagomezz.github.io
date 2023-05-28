import TrekLog from "./components/assets/Portfolio/Treklog.gif"
import BarkBuddies from "./components/assets/Portfolio/BarkBuddies.gif"
import BudgetApp from "./components/assets/Portfolio/BudgetApp.gif"
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
}

]


export default Projects