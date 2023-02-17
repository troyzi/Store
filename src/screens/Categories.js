import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-5">
        {" "}
        <button className="btn btn-dark">Our Categories</button>{" "} </div>
      <div className="d-flex justify-content-center mt-3">
        {" "}
        <span className="text text-center">PICK YOUR          
        <br /> 
          F A V O R I T E
        </span>{" "}
      </div>
      <div className="row mt-2 g-4">
        <div onClick={() => {
            navigate("/products/Clothe"); }}
          className="col-md-4 " >
          <div className="card p-1">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">
                {" "} <span>Clothe</span>  </div> <div> {" "}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizh1ostz5TQWMaT3tDw7jZ-dJazMnd2_XQg&usqp=CAU"
                  height="88"
                  width="90"
                  alt="Clothe" />{" "}</div> </div></div> </div>
        <div onClick={() => {
            navigate("/products/Electrical"); }}
          className="col-md-4 " >
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename">  {" "}
                <span>Electrical</span>{" "}  </div> <div> {" "}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtW1JMi8s2Yjf8O42XTZnA880JprdHqOO-A&usqp=CAU"
                  height="80"
                  width="100"
                  alt="Electrical" />{" "}</div> </div> </div></div>
        <div onClick={() => {
            navigate("/products/Perfumes");}}
          className="col-md-4 " >
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="flex-column lh-1 imagename"> {" "}
                <span>Perfumes</span>{" "} </div>
              <div>{" "}
                <img src="https://occ-0-38-300.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU0vHyXfaJWC4jzRi09ZDV_bytRiQeXnh9GgzaW-SgWGzzhau3uK9U8Z_2H23PglSLUzl47ahIMsugq9umAukO10vEmg_aHGn9XvsLnxS5U8HrYPQqMqp49PQdoCtxi8u79O.jpg?r=fdb"
                  height="80"
                  width="200"
                  alt="Perfumes" />{" "} </div></div></div> </div></div> </div>  );};

export default Categories;
