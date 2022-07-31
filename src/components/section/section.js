import Logo from "../../assets/img/logo.png"
const Left = () => {
  return (
   <div className="bg-dark pt-3 ps-4">
     <li className="d-flex mt-5 align-items-center pb-5">
      <img src={Logo} className="left-img me-3" width={32} height={32} alt="rasm"/>
      <p className="text-white-50 fs-3">Dashboard Kit</p>
    </li>
   </div>
  )
}

export default Left;