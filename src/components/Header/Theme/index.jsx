import  {FaMoon , FaSun}  from "react-icons/fa";

function Theme({theme, setTheme}){

    return(
        <>
            {
                theme === "ligth" ? (
                    <FaMoon onClick={() => setTheme("dark")}/>
                )
                :(
                    <FaSun color="var(--color-grey-20)" onClick={() => setTheme("ligth")}/>
                )
            }          
        </>
    )
}

export default Theme