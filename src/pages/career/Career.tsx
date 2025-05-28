import React, { useState } from "react";
import { JobApplicationFormStep, PageHeader } from "../../components";
import { Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const Career = () => {
  const { t } = useTranslation();
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
    <Center pt="4rem">
      <Stack gap={2} align="center">
        <PageHeader title={t("career.title")} text={t("career.text")} />
        <JobApplicationFormStep form={form} setForm={setForm} />
      </Stack>
    </Center>

  );
};
