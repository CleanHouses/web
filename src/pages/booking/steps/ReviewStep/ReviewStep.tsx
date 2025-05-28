import { Group, Text, Stack, Badge, Divider } from "@mantine/core";
import {
  IconCalendarEvent,
  IconMail,
  IconMapPin,
  IconMessage,
  IconPhone,
  IconUser,
  IconUsers
} from "@tabler/icons-react";
import styles from "../../BookingStepper.module.scss"
import React from "react";
import { StepsFooter } from "../../../../components";
import { useTranslation } from "react-i18next";

export const ReviewStep = ({ form, prevStep, nextStep }: any) => {
  const {t} = useTranslation();
  const handleSubmit = () => {
    nextStep();
  };

  const formatDate = (date: Date) => {
    if (date instanceof Date && !isNaN(date.getTime())) {
      return date.toLocaleDateString();
    }
    return '';
  };

  return (
    <div className={styles.formStep}>
      <Stack gap="sm" mb="md">
        <Group gap={6}><IconUser size={16} /><Text>{form.firstName} {form.lastName}</Text></Group>
        <Group gap={6}><IconMail size={16} /><Text>{form.email}</Text></Group>
        <Group gap={6}><IconPhone size={16} /><Text>{form.phone}</Text></Group>
        <Group gap={6}><IconMapPin size={16} /><Text>{form.address}</Text></Group>
        {form.comments && <Group gap={6}><IconMessage size={16} /><Text>{form.comments}</Text></Group>}
        <Divider my="xs" />

        <Stack gap={6} align="start">
          <Group gap={4} mb="sm" align="center">
            <IconCalendarEvent size={16} />
            <Text fw={500}>
              {t("common.dates")}
            </Text>
          </Group>
          <Group gap={3}>{form.dates.map((d: Date, i: number) => (
            <Badge variant="light" color="#6c6ce5" key={i}>{formatDate(new Date(d))}</Badge>
          ))}
          </Group>
        </Stack>

        <Divider my="xs" />

        <Stack gap={6} align="start">
          <Group gap={4} mb="sm" align="center">
            <IconUsers size={16} />
            <Text fw={500}>
              {t("common.employees")}
            </Text>
          </Group>
          <Group gap={3}>{form.employees.map((e: string, index: string) => (
            <Badge  color="hsl(353, 100%, 65%)" key={index}>{e}</Badge>
          ))}
          </Group>
        </Stack>
      </Stack>

      <Text mb="md" color="dimmed">
        Please verify all details are correct before submitting your booking.
      </Text>
      <StepsFooter onNext={handleSubmit} onBack={prevStep} nextTitle="Confirm & Submit"/>
    </div>
  );
};
