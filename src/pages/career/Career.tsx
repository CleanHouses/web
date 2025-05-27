import React, { useState } from "react";
import { JobApplicationFormStep, PageHeader } from "../../components";
import { Center, Stack } from "@mantine/core";

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
    <Center>
      <Stack gap={2} align="center">
        <PageHeader title="Apply for a Position" text="We’re excited that you’re interested in joining our team! Please complete the form below so we can learn more about you and your experience."/>
      <JobApplicationFormStep form={form} setForm={setForm} />
      </Stack>
    </Center>

  );
};
