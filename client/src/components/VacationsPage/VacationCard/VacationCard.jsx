/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./VacationCard.css";
import AdminControllers from "./AdminControllers/AdminControllers";
import UserControllers from "./UserControllers/UserControllers";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const VacationItem = ({ vacation }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handelExpand = () => {
    setExpanded(!expanded);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { admin } = userInfo;

  const {
    id,
    description,
    destination,
    photoUrl,
    price,
    followers,
    fromDate,
    toDate,
    isUserFollow,
  } = vacation;

  const renderControllers = () => {
    if (userInfo && !admin) {
      return (
        <UserControllers
          vacationId={id}
          isUserFollow={isUserFollow}
          followers={followers}
        />
      );
    } else if (userInfo && admin) {
      return <AdminControllers vacation={vacation} />;
    }
  };

  // const date = format(new Date(), "dd/mm/yyy");

  // const bbdate = new Date(fromDate);

  // console.log(bbdate.getDate());

  // const formatFromDate = format(new Date(fromDate), "mm/dd/yyyy");
  // const formatToDate = format(new Date(toDate), "mm/dd/yyyy");

  // console.log(formatFromDate);
  // console.log(formatToDate);

  return (
    <div>
      <Card className="card__container">
        <CardMedia
          className="card__image"
          image={photoUrl}
          title={`${destination} Photo's`}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h4">
            {destination}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            From: {fromDate}
            <br />
            To: {toDate}
          </Typography>
        </CardContent>
        <CardActions className="card__actions" disableSpacing>
          {renderControllers()}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handelExpand}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          className="collapse"
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography variant="p">{vacation.description}</Typography>
            <br />
            <Typography variant="p">price: {vacation.price}$</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default VacationItem;
