import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { configHeaders } from "../../../../../helpers/configHeaders";
import { fetchVacations } from "../../../../../redux/actions/vacationsActions";

const UserControllers = ({ followers, isUserFollow, vacationId }) => {
  const dispatch = useDispatch();

  const handelFollow = async () => {
    await fetch(`http://localhost:5000/api/followers/follow/${vacationId}`, {
      method: "POST",
      headers: configHeaders(),
    });
    dispatch(fetchVacations());
  };

  const handelUnFollow = async () => {
    await fetch(
      `http://localhost:5000/api/followers/remove?vacationID=${vacationId}`,
      {
        method: "DELETE",
        headers: configHeaders(),
      }
    );
    dispatch(fetchVacations());
  };

  return (
    <div>
      <div className="user__controllers">
        {isUserFollow ? (
          <IconButton onClick={handelUnFollow}>
            <FavoriteIcon style={{ fontSize: "35px" }} />
          </IconButton>
        ) : (
          <IconButton onClick={handelFollow}>
            <FavoriteBorderIcon style={{ fontSize: "35px" }} />
          </IconButton>
        )}
        <p>Followers: {followers}</p>
      </div>
      ,
    </div>
  );
};

export default UserControllers;
