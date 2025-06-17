import React, { use } from "react";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
        token: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully!");
      setTimeout(() => {
        window.location.reload(); // Redirect to home page after logout
      }, 2000);
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out. Please try again.");
      setTimeout(() => {}, 2000); // Optional: Close modal after error
    }
  };
  return (
    <>
      <div>
        {" "}
        <button
          className="px-2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer transition-colors duration-300 text-sm w-max"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Logout;
