import { Paper, Card } from "@material-ui/core";
import React from "react";

export default function PageHeader(props) {
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={0} square>
      <div>
        <card>{icon}</card>
      </div>
    </Paper>
  );
}
