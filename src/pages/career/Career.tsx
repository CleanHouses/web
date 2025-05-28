import React, { useState } from "react";
import { JobApplicationFormStep, PageHeader } from "../../components";
import { Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Success } from "../booking/steps";

export const Career = () => {
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleSubmit = () => {
    setShowSuccess(true);
  }

  return (
    <Center pt="4rem">
      <Stack gap={2} align="center">
        <PageHeader title={t("career.title")} text={t("career.text")} />
        {showSuccess && <Success />}
        {!showSuccess &&<JobApplicationFormStep form={form} setForm={setForm} onSubmit={handleSubmit}/>}
      </Stack>
    </Center>

  );
};
