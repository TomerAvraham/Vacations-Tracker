import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchAllFollowers());
  }, []);

  return (
    <div className="report__container">
      <h1>reports</h1>
      <BarChart width={730} height={250} data={vacationsFollowers}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="followers" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ReportPage;
