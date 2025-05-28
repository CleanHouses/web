import { Button, Card, Center, Group, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Success = ({onSubmit}:{onSubmit?: any}) => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const handleClick = () => {
    if (onSubmit) {
      onSubmit();
    } else {
      navigate("/services/booking/1")
    }
  }
  return (
    <Center>
      <Card mt="lg" radius="lg" shadow="lg" padding="md" w={400}>
        <Stack align="center" gap="lg">
          <ThemeIcon size={64} radius="xl" style={{ backgroundColor: "#6c6ce5" }}>
            <IconCheck size={36} />
          </ThemeIcon>

          <Text ta="center" fw={600} size="lg">
            {t("common.thankYou")}
          </Text>
          <Text ta="center" size="sm" c="dimmed">
            {t("common.willCallYou")}
          </Text>

          <Group mt="md">
            <Button variant="outline" color="#6c6ce5" onClick={handleClick} radius="lg">
              {t("home.bookOnline")}
            </Button>
          </Group>
        </Stack>
      </Card>
    </Center>
  );
};
