import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/auth/authAction";

const useCheckUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  async function checkUser() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/getUser`,
        {
          headers: { authorization: `Bearer ${user?.token}` },
        }
      );
      console.log(data);
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
