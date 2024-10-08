import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/shared/Spinner";
import Form from "./../../components/shared/Form/Form";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form
              submitBtn={"Sign In"}
              formTitle={"sign in to your account"}
              formType={"login"}
            />

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create An Account
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
