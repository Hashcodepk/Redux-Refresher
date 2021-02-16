import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UsersContainer = styled.div`
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

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const UsersList = (props) => {
  const { users } = useSelector(stateSelector);
  //   const users = useSelector((state) => state.homePageReducer.users);

  const history = useHistory();

  const goToUserPage = (id) => {
    history.push(`/user/${id}`);
  };

  return (
    <UsersContainer>
      {!users.length ? (
        <h1>Loading</h1>
      ) : (
        users.map((user, idx) => (
          <UserWrapper key={idx} onClick={() => goToUserPage(user.id)}>
            <UserImage>
              <img src={user.avatar} alt="avatar" />
            </UserImage>
            <UserName>
              {user.first_name} {user.last_name}
            </UserName>
          </UserWrapper>
        ))
      )}
    </UsersContainer>
  );
};

export default UsersList;
