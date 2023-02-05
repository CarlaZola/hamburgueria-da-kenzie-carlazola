import { useForm } from "react-hook-form";
import StyledInputSearch from "./input";
import {FaSearch} from "react-icons/fa"
import { useRef, useEffect } from "react";
import useOutclick from "../../../hooks";


function Input({search, setSearch, setFilteredItems}){
    const {register, handleSubmit, reset}  = useForm({
        mode: "onChange",
    });

    function submit(data){
        setFilteredItems(data.productSearch)
        reset()
        setSearch(false)
    }

    const ref = useOutclick(() => {
        setSearch(false) 
    })

    useEffect(() => {
        if(search){
            window.addEventListener("keyup" , (keyCode) => {
                 if(keyCode.which === 27){
                    setSearch(false)
                 }         
            })
         }
    }, [search])

    return (
        <>
       
        {
            search &&  <StyledInputSearch>
                            <form onSubmit={handleSubmit(submit)} ref={ref}>
                                <input placeholder="Digite o que procura..." id="productSearch" {...register("productSearch")}/>
                                <button type="submit"> <FaSearch color="var(--color-grey-0)"/></button>
                            </form>
                        </StyledInputSearch>
        }
        </>
    )
}

export default Input