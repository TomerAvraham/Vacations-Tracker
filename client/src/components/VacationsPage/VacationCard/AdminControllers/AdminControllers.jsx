import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteVacation } from "../../../../redux/actions/vacationsActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AdminModal from "../../AdminModal/AdminModal";

const AdminControllers = ({ vacation }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handelDeleteVacation = () => {
    dispatch(deleteVacation(vacation.id));
  };

  return (
    <div className="admin__controllers">
      <IconButton onClick={handelDeleteVacation}>
        <DeleteIcon style={{ fontSize: "35px", color: " #27ae60" }} />
      </IconButton>
      <IconButton onClick={handleOpen}>
        <EditIcon style={{ fontSize: "35px", color: " #27ae60" }} />
      </IconButton>
      <AdminModal vacation={vacation} open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminControllers;
