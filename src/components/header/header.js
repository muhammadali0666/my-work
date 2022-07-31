const Header = (props) => {
  return (
    <div className="mt-3 pt-5 ms-4 d-flex align-items-center mx-auto ">
      <p className="fs-3 me-5 pe-5">
      Overview
      </p>
      <div className="d-flex align-items-center position-absolute top-3 end-0 pe-5">
      <img className="" src={props.img} alt="qidirish" width={16} height={16}/>
      <img className="ms-4 me-4" src={props.pic} alt="bildirishnoma" width={16} height={16}/>
      <p className="fs-5 ms-4">Jones Ferdinand</p>
      <img className="ms-3" src={props.rasim} alt="rasim" width={40} height={40}/>
      </div>
    </div>
  )
}

export default Header;