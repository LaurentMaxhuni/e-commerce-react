import React, { useState } from "react";

function CheckoutForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    } else {
      delete newErrors["name"]
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else {
        delete newErrors["email"]
    }
    if (email && !/\S+@\S+.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    } else {
        delete newErrors["email"]
    }
    if (!surname) {
        newErrors.surname = "Suranme is required";
    } else {
        delete newErrors["surname"]
    }
    if (!location) {
        newErrors.location = "Location is required";
    } else {
        delete newErrors["location"]
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);
    } else {
        setErrors({});
        alert(`Order Placed by ${name} ${surname} | 
               City: ${location} | 
               Email: (${email})`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {errors.location && <p style={{ color: "red" }}>{errors.location}</p>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </label>
        </div>
        <button type="submit">Place Order!</button>
      </form>
    </>
  );

//   Find a library that handles forms
}

export default CheckoutForm;
