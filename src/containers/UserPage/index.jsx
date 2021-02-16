import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { setUser } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUser } from "./selector";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  cursor: pointer;
  flex: 1 1 25%;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;

  img {
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 5px #000;
    transition: all 0.2s;
  }

  img:hover {
    transform: translateY(-2px);
    box-shadow: 3px 5px 10px #000;
  }

  img:active {
    box-shadow: 0px 0px 0px #000;
  }
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 10px 0px 0px 0px;
`;

const UserEmail = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #808080;
  margin: 0;
`;

const UserButton = styled.button`
  margin: 15px;
  padding: 5px 15px;
  color: white;
  background-color: black;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 5px 10px #000;
  }

  &:active {
    box-shadow: 0px 0px 0px #000;
  }
`;
const stateSelector = createSelector(makeSelectUser, (user) => ({
  user,
}));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export function UserPage(props) {
  const history = useHistory();
  const { user } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const { userId } = useParams();

  const fetchUser = async (id) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
      (err) => {
        console.log("Err: ", err);
      }
    );

    console.log("User: ", response.data.data);

    if (response) setUser(response.data.data);
  };

  useEffect(() => {
    if (userId && userId !== "") fetchUser(userId);
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <UserContainer>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar} alt="avatar" />
        </UserImage>
        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
        <UserEmail>{user.email}</UserEmail>
        <UserButton onClick={() => history.push("/")}>Go back</UserButton>
      </UserWrapper>
    </UserContainer>
  );
}
