const Card = (props) => {
  return (
    <li className="d-flex flex-column align-items-center border border-2 mt-5 px-5 py-3 mx-auto ">
      <p className="fs-3">{props.value}</p>
      <p className="fs-1">{props.number}</p>
    </li>
  )
}
export default Card;