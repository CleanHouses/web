import { Text, Card, Stack, Stepper, Title, Container } from "@mantine/core";
import React, { useState } from "react";
import { DateSelectionStep, ConfirmationStep, PersonalInfoStep, EmployeeSelectionStep, ReviewStep } from "./steps";
import { IconUser, IconCalendarEvent, IconUsers, IconCheck, IconClipboardList } from "@tabler/icons-react";
import styles from "./BookingStepper.module.scss";
import { motion } from "framer-motion";
import { Shapes } from "../../components";

const stepIconSize = 18;

export const BookingStepper = () => {
  const [active, setActive] = useState(0);
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

  const nextStep = () => setActive((current) => current + 1);
  const prevStep = () => setActive((current) => current - 1);
  const restart = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
      dates: [],
      employees: ["any"],
    });
    setActive(0);
  };

  const steps = [
    {
      label: "Your Info",
      icon: <IconUser size={stepIconSize} />,
      component: <PersonalInfoStep form={form} setForm={setForm} nextStep={nextStep} />,
    },
    {
      label: "Choose Date",
      icon: <IconCalendarEvent size={stepIconSize} />,
      component: <DateSelectionStep form={form} setForm={setForm} nextStep={nextStep} />,
    },
    {
      label: "Select Staff",
      icon: <IconUsers size={stepIconSize} />,
      component: <EmployeeSelectionStep form={form} setForm={setForm} nextStep={nextStep} />,
    },
    {
      label: "Review",
      icon: <IconClipboardList size={stepIconSize} />,
      component: <ReviewStep form={form} prevStep={prevStep} nextStep={nextStep} />,
    },
  ];

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.wrapper}>
      <Shapes />
      <Container size="sm">
        <Stack align="center">
          <Title order={2} mb="sm">
            Book Your Cleaning Service
          </Title>
          <Text>
            Fill out the form step by step to schedule your professional cleaning service. Choose a date, leave special
            requests, and select your preferred cleaner.
          </Text>
        </Stack>
      </Container>

      {active === 4 ? (
        <Card mt="lg" radius="lg" shadow="lg" padding="xl">
          <ConfirmationStep restart={restart} />
        </Card>
      ) : (
        <>
          <Stepper
            active={active}
            onStepClick={setActive}
            size="xs"
            mb="lg"
            mt="lg"
            allowNextStepsSelect={false}
            orientation="horizontal">
            {steps.map((step, index) => (
              <Stepper.Step key={index} icon={step.icon} />
            ))}
          </Stepper>
          <Card radius="lg" shadow="lg" padding="xl">
            <div className={styles.stepContent}>{steps[active].component}</div>
          </Card>
        </>
      )}
    </motion.section>
  );
};
