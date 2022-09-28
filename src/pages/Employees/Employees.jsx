import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles();

export default function Employees() {
  const classes = useStyles;

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper classes={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}
