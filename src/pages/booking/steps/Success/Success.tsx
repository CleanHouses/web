import { Button, Card, Center, Group, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const Success = ({onSubmit}:{onSubmit?: any}) => {
  const navigate = useNavigate();

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
            Thank you for using our service!
          </Text>
          <Text ta="center" size="sm" c="dimmed">
            Our manager will call you shortly.
          </Text>

          <Group mt="md">
            <Button variant="outline" color="#6c6ce5" onClick={handleClick} radius="lg">
              Booking
            </Button>
          </Group>
        </Stack>
      </Card>
    </Center>
  );
};
