import { Card, CardBody } from "@chakra-ui/react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Minicalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Card>
      <CardBody>
        <Calendar onChange={onChange} value={value} selectrange={setSelectionRange} />
      </CardBody>
    </Card>
  );
}

export default Minicalendar;