import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/auth/authAction";

const useCheckUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  async function checkUser() {
    try {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/user/getUser`, {
        headers: { authorization: `Bearer ${user?.token}` },
      });
    } catch (error) {
      if (error) {
        dispatch(removeUser());
        console.log(error);
      }
    }
  }
  return { checkUser };
};

export default useCheckUser;
