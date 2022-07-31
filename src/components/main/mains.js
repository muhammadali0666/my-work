const Mains = (props) => {
  return (
    <div className="border border-2 w-100 d-flex justify-content-between pt-3 ps-3 pe-3">
      <div>
        <p className="fs-3">Today’s trends</p>
        <p>as of 25 May 2019, 09:41 PM</p>
      </div>
      <div className="d-flex">
        <p className="me-5">Today</p>
        <p>Yesterday</p>
      </div>
    </div>
  )
}

export default Mains;