import {
  TextInput,
  Textarea,
  Group,
  Text,
  Stack,
  Card,
  Tooltip,
} from '@mantine/core';
import { IconUser, IconAt, IconPhone, IconWorld } from "@tabler/icons-react";
import { useState } from 'react';
import { Button } from "../_ui";
import { useMediaQuery } from "@mantine/hooks";

export const JobApplicationFormStep = ({ form, setForm, onSubmit }: any) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    portfolio: false,
    coverLetter: false,
  });

  const validate = () => {
    const newErrors = {
      firstName: form.firstName.trim() === '',
      lastName: form.lastName.trim() === '',
      email: form.email.trim() === '',
      phone: form.phone.trim() === '',
      portfolio: form.portfolio.trim() === '',
      coverLetter: form.coverLetter.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };
  const isMobile = useMediaQuery("(max-width: 1100px)");

  return (
      <Card
        radius="lg"
        shadow="lg"
        padding="xl"
        maw={600}
        w="100%"
        withBorder
        style={{ overflow: 'visible' }}
      >
        <Stack gap="md">
          <TextInput
            label={<LabelWithIcon icon={<IconUser size={14} />} text="First Name" required />}
            value={form.firstName}
            onChange={(e: any) => setForm((f: any) => ({ ...f, firstName: e.target.value }))}
            error={errors.firstName && 'First name is required'}
            radius="lg"
          />

          <TextInput
            label={<LabelWithIcon icon={<IconUser size={14} />} text="Last Name" required />}
            value={form.lastName}
            onChange={(e: any) => setForm((f: any) => ({ ...f, lastName: e.target.value }))}
            error={errors.lastName && 'Last name is required'}
            radius="lg"
          />

          <TextInput
            label={<LabelWithIcon icon={<IconAt size={14} />} text="Email" required />}
            value={form.email}
            onChange={(e: any) => setForm((f: any) => ({ ...f, email: e.target.value }))}
            error={errors.email && 'Email is required'}
            radius="lg"
          />

          <TextInput
            label={<LabelWithIcon icon={<IconPhone size={14} />} text="Phone" required />}
            value={form.phone}
            onChange={(e: any) => setForm((f: any) => ({ ...f, phone: e.target.value }))}
            error={errors.phone && 'Phone number is required'}
            radius="lg"
          />

          <TextInput
            label={<LabelWithIcon icon={<IconWorld size={14} />} text="Portfolio or LinkedIn" required />}
            value={form.portfolio}
            onChange={(e: any) => setForm((f: any) => ({ ...f, portfolio: e.target.value }))}
            error={errors.portfolio && 'Portfolio link is required'}
            radius="lg"
            placeholder="https://yourportfolio.com"
          />

          <Textarea
            label="Cover Letter"
            placeholder="Tell us why you’re a good fit for this role..."
            value={form.coverLetter}
            onChange={(e: any) => setForm((f: any) => ({ ...f, coverLetter: e.target.value }))}
            error={errors.coverLetter && 'Cover letter is required'}
            radius="lg"
            minRows={4}
          />

          <Stack pos="relative">
            <Tooltip
              label="Feel free to add any additional comments or questions you may have."
              position="left"
              offset={4}
              withArrow
              multiline
              bg="#6c6ce5"
              opened={!isMobile}
              w={220}
            >
              <Textarea
                label="Additional Comments"
                placeholder="Anything else you'd like to share..."
                value={form.comment}
                onChange={(e: any) => setForm((f: any) => ({ ...f, comment: e.target.value }))}
                radius="lg"
              />
            </Tooltip>
          </Stack>

          <Group justify="flex-end" mt="md">
            <Button radius="lg" onClick={onSubmit}>
              Submit Application
            </Button>
          </Group>
        </Stack>
      </Card>
  );
};

function LabelWithIcon({ icon, text, required }: { icon: React.ReactNode; text: string; required?: boolean }) {
  return (
    <Group gap={4} component="label">
      {icon}
      <Text span>{text}</Text>
      {required && (
        <Text span c="red">
          *
        </Text>
      )}
    </Group>
  );
}
