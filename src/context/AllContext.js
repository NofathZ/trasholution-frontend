import { createContext } from "react";

const defaultRegisValue = {
  nama: "",
  email: "",
  password: "",
  phone: "",
}

export const UserContext = createContext({});

export const RegisterContext = createContext(defaultRegisValue)