import { TextInput, Textarea, Group, Text, Stack, Tooltip } from "@mantine/core";
import { IconUser, IconAt, IconPhone, IconHome, IconMail } from "@tabler/icons-react";
import { useState } from "react";
import { StepsFooter } from "../../../../components";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

export const PersonalInfoStep = ({ form, setForm, nextStep }: any) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
  });
  const { t } = useTranslation();
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

  const isMobile = useMediaQuery("(max-width: 1100px)");

  return (
    <Stack gap="md">
      <TextInput
        label={<LabelWithIcon icon={<IconUser size={14} />} text={t("common.firstName")} required />}
        value={form.firstName}
        onChange={(e: any) => setForm((f: any) => ({ ...f, firstName: e.target.value }))}
        error={errors.firstName && t("error.firstName")}
        placeholder={t("placeholder.firstName")}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconUser size={14} />} text={t("common.lastName")} required />}
        value={form.lastName}
        onChange={(e: any) => setForm((f: any) => ({ ...f, lastName: e.target.value }))}
        error={errors.lastName && t("error.lastName")}
        placeholder={t("placeholder.lastName")}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconAt size={14} />} text={t("common.email")} required />}
        value={form.email}
        onChange={(e: any) => setForm((f: any) => ({ ...f, email: e.target.value }))}
        error={errors.email && t("error.email")}
        placeholder={t("placeholder.email")}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconPhone size={14} />} text={t("common.phone")} required />}
        value={form.phone}
        onChange={(e: any) => setForm((f: any) => ({ ...f, phone: e.target.value }))}
        error={errors.phone && t("error.phone")}
        placeholder={t("placeholder.phone")}
        radius="lg"
      />

      <TextInput
        label={<LabelWithIcon icon={<IconHome size={14} />} text={t("common.address")} required />}
        value={form.address}
        onChange={(e: any) => setForm((f: any) => ({ ...f, address: e.target.value }))}
        error={errors.address && t("error.address")}
        placeholder={t("placeholder.address")}
        radius="lg"
      />


      <Tooltip
        label={t("booking.detailText")}
        position="left"
        offset={4}
        transitionProps={{ duration: 200 }}
        withArrow
        multiline
        bg="#6c6ce5"
        opened={!isMobile}
        w={220}>
        <Textarea
          label={<LabelWithIcon icon={<IconMail size={14} />} text={t("common.comment")} required />}
          placeholder={t("placeholder.additionalDetail")}
          value={form.comment}
          onChange={(e: any) => setForm((f: any) => ({ ...f, comment: e.target.value }))}
          radius="lg"
        />
      </Tooltip>
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
