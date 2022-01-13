function Preview(ele) {

  // console.log(ele.info)
  return (
    <li className="premiere">
      <img src={ele.info.img} alt={ele.info.title} />
      <p> {ele.info.title} </p>
      <p className="desc"> {ele.info.description} </p>
    </li>
  )
}

export default Preview;