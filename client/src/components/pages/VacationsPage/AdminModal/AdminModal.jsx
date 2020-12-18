import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVacation } from "../../../../redux/actions/vacationsActions";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./AdminModal.css";

const AdminModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handelAddVacation = () => {
    dispatch(addVacation(formData));
  };

  return (
    <Modal className="modal" open={open} onClose={handleClose}>
      <div className="modal__container">
        <TextField
          onChange={(e) => handelChange(e)}
          name="description"
          label="description"
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="destination"
          label="destination"
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="photoUrl"
          label="photoUrl"
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="price"
          type="number"
          label="price"
        />
        <div className="date__input">
          <TextField
            onChange={(e) => handelChange(e)}
            name="fromDate"
            type="date"
            label="From"
          />
          <TextField
            onChange={(e) => handelChange(e)}
            name="toDate"
            type="date"
            label="To"
          />
        </div>
        <Button onClick={handelAddVacation} variant="contained" color="primary">
          Add
        </Button>
      </div>
    </Modal>
  );
};

export default AdminModal;
