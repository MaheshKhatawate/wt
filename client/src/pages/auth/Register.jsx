import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "@/components/common/Form";
import { registerFormControls } from "@/config";
import useScrollToTop from "../../hooks/useScrollToTop";
import { registerUser } from "@/store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  patientName: "",
  email: "",
  password: "",
  age: "",
  phone: "",
  gender: "",
};

const Register = () => {
  useScrollToTop();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      if (data.payload?.success) {
        // Registration successful
        console.log("Registration successful");
        toast.success(data.payload?.message);
        navigate("/auth/login");
      } else {
        // Registration failed
        toast.error(data.payload?.message || "Registration failed.");
        console.log("Registration failed");
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="card-elevated p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl mb-4">
            <span className="text-2xl font-bold text-white">PA</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create Account
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link
              className="font-semibold ml-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
              to="/auth/login"
            >
              Sign in
            </Link>
          </p>
        </div>

        <Form
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
