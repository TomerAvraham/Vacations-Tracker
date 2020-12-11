import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { fetchVacations } from "../../../redux/actions/vacationsActions"
import "./VacationsPage.css"


const VacationsPage = () => {

  const dispatch = useDispatch()

  const vacations = useSelector(state => state.vacations)
  console.log(vacations)

  useEffect(() => {
    dispatch(fetchVacations())
  }, [])


  return (
    <div className="vacations__container">
      im from vacations loly is the best !!
    </div>
  );
};


export default VacationsPage;
