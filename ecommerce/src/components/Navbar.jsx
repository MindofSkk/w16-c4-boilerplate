import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
    


      <NavLink to={"/"} >Home</NavLink> 
      <NavLink to={"/about"} >About</NavLink>
      <NavLink to={"/products"} >Products</NavLink>
      <NavLink to={"/products/men"} >Men</NavLink>
      <NavLink to={"/products/women"} >Women</NavLink>
      <NavLink to={"/products/kids"} >Kids</NavLink>
      <NavLink to={"/products/homedecor"}>Home Decor</NavLink>
   
    </nav>
  );
};