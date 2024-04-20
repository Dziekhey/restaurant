import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get('/users/profile')
        .then(({ data }) => {
          setUser(data);
        })
        .catch(error => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [user]); // Added 'user' to the dependency array

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Fixed value prop */}
      {children}
    </UserContext.Provider>
  );
}