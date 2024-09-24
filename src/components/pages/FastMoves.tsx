import React from 'react';
import {Stack} from "@mui/material";
import FastMovesTable from "../FastMovesTable";

function FastMoves() {
  return (
    <Stack direction={'column'}>
      <h1>Fast Moves</h1>
      <FastMovesTable />
    </Stack>
  );
}

export default FastMoves;
