import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import { setUsers } from "./actions";
import Axios from "axios";
import UsersList from "./UsersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actiponDispatcher = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

const HomePage = (props) => {
  const { users } = useSelector(stateSelector);
  const { setUser } = actiponDispatcher(useDispatch());
  const fetchUsers = async () => {
    const respone = await Axios.get(
      "https://reqres.in/api/users"
    ).catch((err) => console.log(err));

    setUser(respone.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UsersList />
    </div>
  );
};

export default HomePage;
