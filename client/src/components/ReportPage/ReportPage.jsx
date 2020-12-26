import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFollowers } from "../../redux/actions/followActions";

import "./ReportPage.css";

const ReportPage = () => {
  const dispatch = useDispatch();

  const vacationsFollowers = useSelector((state) => state.vacationsFollowers);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(fetchAllFollowers());
  }, []);

  return (
    <div className="report__container">
      {userInfo === null && <Redirect to="/login" />}
      <h1>Reports</h1>
      <div className="chart__container">
        <BarChart width={730} height={250} data={vacationsFollowers}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar dataKey="followers" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default ReportPage;
