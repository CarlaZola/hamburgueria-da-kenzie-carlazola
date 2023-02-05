import  {FaMoon , FaSun}  from "react-icons/fa";

function Theme({theme, setTheme}){

    return(
        <>
            {
                theme === "ligth" ? (
                    <FaMoon className="iconNav" onClick={() => setTheme("dark")}/>
                )
                :(
                    <FaSun className="iconNav" color="var(--color-grey-20)" onClick={() => setTheme("ligth")}/>
                )
            }          
        </>
    )
}

export default Theme