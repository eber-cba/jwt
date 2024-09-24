import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  console.log("user => ", user);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>estas logeado con exito!! 👌</h1>
          <h2>{user.email}</h2>
        </div>
      ) : (
        <div>no esta logeado...😑</div>
      )}
    </div>
  );
};
export default Profile;
