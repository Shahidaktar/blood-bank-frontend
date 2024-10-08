import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password || !role)
      return alert("provide proper information");

    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  hospitalName,
  organizationName,
  address,
  phone,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        hospitalName,
        organizationName,
        address,
        phone,
        website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
