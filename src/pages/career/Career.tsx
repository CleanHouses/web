import React, { useState } from "react";
import { JobApplicationFormStep } from "../../components";
import { Card, Center } from "@mantine/core";

export const Career = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
    dates: [],
    employees: ["any"],
  });
  return (
        <JobApplicationFormStep form={form} setForm={setForm} />
  );
};
