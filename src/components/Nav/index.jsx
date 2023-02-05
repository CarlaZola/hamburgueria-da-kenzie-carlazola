import StyledNav from "./nav";
// import hamburguer from "../../assets/hamburguer.png"

function IconsNav({setFilteredItems}){

  return(
        <StyledNav>
            <ul>
                <li onClick={() => setFilteredItems("Todos")}>
                    <img src="/public/hamburguer2.png" alt="" className="icons"/>
                    <p>Todos</p>
                </li>
                <li onClick={() => setFilteredItems("Sanduíches")}>                   
                    <img src="/public/hamburger.png" alt="" className="icons"/>
                    <p>Sanduíches</p>
                </li>
                <li onClick={() => setFilteredItems("Bebidas")}>
                    <img src="/public/refrigerante.png" alt="" className="icons"/>
                    <p>Bebidas</p>
                </li>
                <li  onClick={() => setFilteredItems("Doces")}>
                    <img src="/public/bolo.png" alt="" className="icons"/>
                    <p>Doces</p>
                </li>
            </ul>
        </StyledNav>
  )
}

export default IconsNav 