import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useUser } from "../Zustand/user";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { login as userLogin } from "../services/user";
import * as yup from "yup";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import axios from "axios";

function LoginForm() {
  const user = useUser((state: any) => state.user);
  const login = useUser((state: any) => state.login);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("entro aqui");
      try {
        console.log("entro aqui");
        let response = await userLogin(values.email, values.password);
        console.log("todo bien");
        navigate("/home");
      } catch (e: any | AxiosError) {
        if (axios.isAxiosError(e)) {
          // Access to config, request, and response
          toast.error("ERROR");
        } else {
          // Just a stock error
          toast.error(e.data.details);
        }
        toast.error(e.data.details);
      }
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <img src={"/big_icon.png"} alt="Small Icon" className="self-center" />
      <form
        onSubmit={formik.handleSubmit}
        className="flex gap-4 flex-col justify-center items-center p-4 w-96"
      >
        <Input
          id="email"
          variant="bordered"
          type="email"
          label="Email"
          onChange={formik.handleChange}
          isInvalid={formik.errors.email ? true : false}
          errorMessage={formik.errors.email}
        />

        <Input
          id="password"
          variant="bordered"
          label="Password"
          onChange={formik.handleChange}
          isInvalid={formik.errors.password ? true : false}
          errorMessage={formik.errors.password}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button type="submit" color="primary">
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
