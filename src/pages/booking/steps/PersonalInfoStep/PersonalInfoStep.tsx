import { TextInput, Textarea, Button, Group, Text, Stack, Card, Tooltip } from "@mantine/core";
import { IconUser, IconAt, IconPhone, IconHome } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../BookingStepper.module.scss";
import { StepsFooter } from "../../../../components";

export const PersonalInfoStep = ({ form, setForm, nextStep }: any) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
  });

  const validate = () => {
    const newErrors = {
      firstName: form.firstName.trim() === "",
      lastName: form.lastName.trim() === "",
      email: form.email.trim() === "",
      phone: form.phone.trim() === "",
      address: form.address.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <Stack gap="md" style={{ overflow: "visible" }}>
      <TextInput
        label={<LabelWithIcon icon={<IconUser size={14} />} text="First Name" required />}
        value={form.firstName}
        onChange={(e) => setForm((f: any) => ({ ...f, firstName: e.target.value }))}
        error={errors.firstName && "First name is required"}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconUser size={14} />} text="Last Name" required />}
        value={form.lastName}
        onChange={(e) => setForm((f: any) => ({ ...f, lastName: e.target.value }))}
        error={errors.lastName && "Last name is required"}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconAt size={14} />} text="Email" required />}
        value={form.email}
        onChange={(e) => setForm((f: any) => ({ ...f, email: e.target.value }))}
        error={errors.email && "Email is required"}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconPhone size={14} />} text="Phone" required />}
        value={form.phone}
        onChange={(e) => setForm((f: any) => ({ ...f, phone: e.target.value }))}
        error={errors.phone && "Phone number is required"}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconHome size={14} />} text="Address" required />}
        value={form.address}
        onChange={(e) => setForm((f: any) => ({ ...f, address: e.target.value }))}
        error={errors.address && "Address is required"}
        radius="lg"
      />

      <Stack pos="relative">
        <Tooltip
          label="Could you please provide a bit more detail about the space that needs to be cleaned?"
          position="left"
          offset={4}
          transitionProps={{ duration: 200 }}
          withArrow
          multiline
          bg="#6c6ce5"
          opened
          w={220}>
          <Textarea
            label="Comment"
            placeholder="Any additional details..."
            value={form.comment}
            onChange={(e) => setForm((f: any) => ({ ...f, comment: e.target.value }))}
            radius="lg"
          />
        </Tooltip>
      </Stack>
      <StepsFooter onNext={handleNext}/>
    </Stack>
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
