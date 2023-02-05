import StyledNav from "./nav";
import hamburger from "../../assets/hamburger.png"
import hamburguer2 from "../../assets/hamburguer2.png"
import refrigerante from "../../assets/refrigerante.png"
import bolo from "../../assets/bolo.png"

function IconsNav({setFilteredItems}){

  return(
        <StyledNav>
            <ul>
                <li onClick={() => setFilteredItems("Todos")}>
                    <img src={hamburguer2} alt="" className="icons"/>
                    <p>Todos</p>
                </li>
                <li onClick={() => setFilteredItems("Sanduíches")}>                   
                    <img src={hamburger} alt="" className="icons"/>
                    <p>Sanduíches</p>
                </li>
                <li onClick={() => setFilteredItems("Bebidas")}>
                    <img src={refrigerante} alt="" className="icons"/>
                    <p>Bebidas</p>
                </li>
                <li  onClick={() => setFilteredItems("Doces")}>
                    <img src={bolo} alt="" className="icons"/>
                    <p>Doces</p>
                </li>
            </ul>
        </StyledNav>
  )
}

export default IconsNav 