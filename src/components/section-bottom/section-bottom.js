// import Bottoms from "../../assets/img/Vector.png"

const Bottom = (props) => {
  return (
 <div className="bg-dark ps-4 pt-5">
     <li className="d-flex align-items-center pb-3">
      <img src={props.img} width={16} height={15} alt="bo'lak"/>
      <p className="text-light ms-3 fs-4">
      {props.name}
      </p>
    </li>
 </div>
  )
}

export default Bottom;