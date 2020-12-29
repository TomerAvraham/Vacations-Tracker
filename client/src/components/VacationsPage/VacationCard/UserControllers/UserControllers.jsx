import React from "react";
import { useDispatch } from "react-redux";
import {
  followVacation,
  unFollowVacation,
} from "../../../../redux/actions/followActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const UserControllers = ({ followers, isUserFollow, vacationId }) => {
  const dispatch = useDispatch();

  const handelFollow = async () => {
    dispatch(followVacation(vacationId));
  };

  const handelUnFollow = async () => {
    dispatch(unFollowVacation(vacationId));
  };

  return (
    <div>
      <div className="user__controllers">
        {isUserFollow ? (
          <IconButton onClick={handelUnFollow}>
            <FavoriteIcon style={{ fontSize: "35px", color: ' #27ae60' }} />
          </IconButton>
        ) : (
          <IconButton onClick={handelFollow}>
            <FavoriteBorderIcon style={{ fontSize: "35px", color: ' #27ae60' }} />
          </IconButton>
        )}
        <p>Followers: {followers}</p>
      </div>
    </div>
  );
};

export default UserControllers;
