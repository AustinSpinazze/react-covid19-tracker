import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const CardContents = ({ coviddata, cardtype, description, lastupdate }) => {
  return (
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardtype}
      </Typography>
      <Typography variant="h5">
        <CountUp start={0} end={coviddata} duration={2.5} separator="," />
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastupdate).toDateString()}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  );
};

export default CardContents;
