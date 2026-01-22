import React, { useState } from "react";

function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "name is req";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "name must be atleast 3 char";
    }

    if (!form.email.trim()) {
      newErrors.email = "email is req";
    } else if (
      !form.email.includes("@") ||
      !form.email.includes(".") ||
      form.email.startsWith("@") ||
      form.email.endsWith("@")
    ) {
      newErrors.email = "email must be valid";
    }

    const age = parseInt(form.age, 10);
    if (!form.age.trim()) {
      newErrors.age = "age is req";
    } else if (isNaN(age)) {
      newErrors.age = "age must be a no";
    } else if (age < 1 || age > 150) {
      newErrors.age = "age must be bet 1 and 150";
    }
    return newErrors;
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length === 0){
        setSubmitted(true)
    }
    else{
        setErrors(validationErrors)
        setSubmitted(false)
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleOnChange}
            placeholder="enter your name"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleOnChange}
            placeholder="enter your email"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Age</label>
          <input
            name="age"
            type="text"
            value={form.age}
            onChange={handleOnChange}
            placeholder="enter your age"
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
