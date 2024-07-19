import { createContext } from "react";

export const AuthContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);

// const useAuthContext = () => {};
