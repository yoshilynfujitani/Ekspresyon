import { useMutation } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      console.log("Succesfully logged out");
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { isLoading, logout };
}
