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

  console.log(vacationsFollowers[0])

  return (
    <div className="report__container">
      {!userInfo.user.admin && <Redirect to="/login" />}
      <h1>Reports</h1>
      <div className="chart__container">
        <BarChart width={600} height={300} data={vacationsFollowers}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, vacationsFollowers[0]?.followers + 2]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="followers" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default ReportPage;
