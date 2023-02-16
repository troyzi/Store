import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    category: "",
    isInStock: true,
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.price &&
      formData.category &&
      formData.image
    ) {
      setLoading(true);
      const ref = collection(firestore, "product");
      try {
        await addDoc(ref, formData);
        setFormData({
          name: "",
          image: "",
          price: 0,
          category: "",
          isInStock: true,
        });
        toast("Products Successfully Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      } }};

  const radioButtonHandler = (e) => {
    if (e.target.id === "No") {
      setFormData({
        ...formData,
        isInStock: false,
      });
    } else {
      setFormData({
        ...formData,
        isInStock: true,
      });}};
  return (
    <div>
      <h1 className="text-center"> Add New Product</h1>
      <div className="p-4 container-sm	">
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <div className="form-outline w-100  m-2 mb-2">
              <label className="form-label" htmlFor="form1Example1">
                Product Name
              </label>
              <input value={formData.name} onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  }); }}
                type="text"
                id="form1Example1"
                className="form-control" />
            </div>
            <div className="form-outline w-100 m-2 mb-2">
              <label className="form-label" htmlFor="form1Example2">
               Picture
              </label>
              <div className="">
                <input value={formData.image} onChange={(e) => {
                    setFormData({
                      ...formData,
                      image: e.target.value,
                    }); }}
                  type="text"
                  id="form1Example2"
                  className="form-control" />

                {formData?.image && (
                  <div className="d-flex align-items-center">
                    <p className="text-center">Preview:</p>
                    <img
                      width={100}
                      height={100}
                      src={formData.image}
                      alt="preview"/>
                  </div>
                )}
              </div></div>  </div>
          <div className="d-flex">
            <div className="form-outline w-100  m-2 mb-2">
              <label className="form-label" htmlFor="form1Example1">
                Price
              </label>
              <input
                value={formData.price}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  });  }}
                type="number"
                id="form1Example1"
                className="form-control" />
            </div>
            <div className="form-outline w-100 m-2 mb-2">
              <label className="form-label" htmlFor="form1Example2">
                Category
              </label>
              <select onChange={(e) => {
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  });
                }}
                value={formData.category}
                className="form-select"
                aria-label="Default select example">
                <option defaultValue value={""}>
                  Select Category
                </option>
                <option value="clothe">Clothe</option>
                <option value="electrical">Electrical</option>
                <option value="perfumes">Perfumes</option>
              </select>
            </div>
          </div>
          <div className="form-outline m-2 d-flex justify-content-between">
            <label className="form-label" htmlFor="form1Example2">
              Is In Stock ?
            </label>
            <div className="d-flex">
              <div className="form-check m-2 ">
                <input
                  onChange={radioButtonHandler}
                  className="form-check-input"
                  type="radio"
                  name="isinstock"
                  id="No"
                  value={formData.isInStock}
                  checked={formData.isInStock === false}/>
                <label className="form-check-label" htmlFor="No">
                  No
                </label>
              </div>
              <div className="form-check m-2">
                <input
                  onChange={radioButtonHandler}
                  className="form-check-input"
                  type="radio"
                  name="isinstock"
                  id="Yes"
                  value={formData.isInStock}
                  checked={formData.isInStock === true} />
                <label className="form-check-label" htmlFor="Yes">
                  Yes
                </label>
              </div> </div></div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className={`btn btn-primary btn-block ${loading && "opacity-50"}`}
              disabled={loading}>
              Add Product
            </button> </div> </form>
      </div> </div>
  );
};

export default AddProduct;
