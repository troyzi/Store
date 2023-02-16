import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div  className="text-center bg-image  rounded-3" style={{
        backgroundImage:
          "rgb('248, 222, 240, 1')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",   }}>
      <div className="mask h-100"
        style={{ backgroundColor: 
        "rgb('248, 222, 240, 1')" }} >

        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-black">
            <h1 className="mb-3">Welcome To our Store</h1>
            <h4 className="mb-3">Chioce u favorire</h4>
           
            <img height={350} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgN-r3ywU9pBctanjsXINqUcomXxuN68iIHw&usqp=CAU"/>
            <br></br>
            <button onClick={() => { navigate("/categories"); }}
              className="btn btn-outline-dark">
              Pick your favorite
            </button>
</div></div></div> </div>
  );
};

export default Hero;
