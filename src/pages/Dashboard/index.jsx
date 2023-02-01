import  {FaMoon , FaSun}  from "react-icons/fa";
import StyledDashboard from "./dashboard";

function Dashboard({setTheme}){
    return(
        <StyledDashboard>
            <FaMoon onClick={() => setTheme("dark")}/>
            <FaSun color="var(--color-grey-20)" onClick={() => setTheme("ligth")}/>
        </StyledDashboard>
    )
}

export default Dashboard