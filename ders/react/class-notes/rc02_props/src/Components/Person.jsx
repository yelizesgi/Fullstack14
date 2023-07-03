import Name from "./Name"
const Person = ({name, img, tel}) => {
  //?Destruc. 
//  const {name, img, tel}= props
  return (
    <div>
        {/* <Name/> */}
        <Name name= {name} />
        <img src={img} alt="person-img" />
        <p>Tel:{tel}</p>
    </div>
  )
}
//  <div>
//       <Name name={props.name} />
//       <img src={props.img} alt="cat-img" />
//       <p>Tel:{props.tel}</p>
//     </div>)



export default Person