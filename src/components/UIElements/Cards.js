import React from "react";
import { Card, Grid } from "@material-ui/core";
import cx from "classnames";

import CardContents from "./CardContents";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContents
            coviddata={confirmed.value}
            cardtype={"Infected"}
            description={"Number of active cases of COVID-19"}
            lastupdate={lastUpdate}
          />
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContents
            coviddata={recovered.value}
            cardtype={"Recovered"}
            description={"Number of recoveries from COVID-19"}
            lastupdate={lastUpdate}
          />
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContents
            coviddata={deaths.value}
            cardtype={"Deaths"}
            description={"Number of recorded deaths caused by COVID-19"}
            lastupdate={lastUpdate}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
