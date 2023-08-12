import Button from "./styled/Button"
import NavStyled from "./styled/NavStyled"




const Nav = () => {
  return (
    <NavStyled>
   <div>
    <img src="./images/logo.png" alt="logo" width="250px"/>
   </div>
   <div>
    <Button>Apply Courses</Button>
    <Button primary>Talk To Adviser </Button>
   </div>


    </NavStyled>
  )
}

export default Nav