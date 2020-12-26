import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchVacations } from "../../redux/actions/vacationsActions";
import "./VacationsPage.css";
import Grid from "@material-ui/core/Grid";
import VacationCard from "./VacationCard/VacationCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AdminModal from "./AdminModal/AdminModal";

const VacationsPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const vacationsList = useSelector((state) => state.vacationsList);
  const { vacations } = vacationsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);

  useEffect(() => {
    dispatch(fetchVacations());
  }, []);

  return (
    <>
      <div className="fab">
        {userInfo === null && <Redirect to="/login" />}
        {userInfo?.admin ? (
          <>
            <Fab onClick={handleOpen} className="fab" aria-label="add">
              <AddIcon />
            </Fab>
            <AdminModal handleClose={handleClose} open={open} />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="vacations__container">
        <Grid container justify="center">
          {vacations &&
            vacations.map((vacation, i) => (
              <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                <VacationCard vacation={vacation} key={i} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default VacationsPage;
