import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addVacation,
  editVacation,
} from "../../../redux/actions/vacationsActions";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./AdminModal.css";

const initialState = {
  description: "",
  destination: "",
  photoUrl: "",
  price: 0,
  fromDate: "",
  toDate: "",
};

const AdminModal = ({ open, handleClose, vacation = initialState }) => {
  const [formData, setFormData] = useState(vacation);

  const handelChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handelAddVacation = (e) => {
    e.preventDefault();
    dispatch(addVacation(formData));
    setFormData(initialState);
  };

  const handelEditVacation = (e) => {
    e.preventDefault();
    dispatch(editVacation(vacation.id, formData));
  };

  return (
    <Modal className="modal" open={open} onClose={handleClose}>
      <form
        onSubmit={
          vacation === initialState
            ? (e) => handelAddVacation(e)
            : (e) => handelEditVacation(e)
        }
        className="modal__container"
      >
        <TextField
          onChange={(e) => handelChange(e)}
          name="description"
          label="description"
          value={formData.description}
          required
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="destination"
          label="destination"
          value={formData.destination}
          required
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="photoUrl"
          label="photoUrl"
          value={formData.photoUrl}
          required
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="price"
          type="number"
          label="price"
          value={formData.price}
          required
        />
        <div className="date__input">
          <TextField
            onChange={(e) => handelChange(e)}
            name="fromDate"
            type="date"
            label="From"
            defaultValue={formData.fromDate}
            required
          />
          <TextField
            onChange={(e) => handelChange(e)}
            name="toDate"
            type="date"
            label="To"
            defaultValue={formData.toDate}
            required
          />
        </div>
        <Button type="submit" variant="contained" id="modal__btn">
          {vacation === initialState ? "Add" : "Edit"}
        </Button>
      </form>
    </Modal>
  );
};

export default AdminModal;
