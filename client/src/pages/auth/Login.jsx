import Form from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import { loginUser } from "@/store/auth";
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  useScrollToTop();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data.payload?.success) {
        // Login successful
        toast.success(data.payload?.message);
        console.log("Login successful");
      } else {
        // Login failed
        toast.error(data.payload?.message || "Login failed.");
        console.log("Login failed");
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
            Welcome Back
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Don't have an account?
            <Link
              className="font-semibold ml-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
              to="/auth/register"
            >
              Sign up
            </Link>
          </p>
        </div>

        <Form
          formControls={loginFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
