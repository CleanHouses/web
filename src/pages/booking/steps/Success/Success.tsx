import { Button, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export const Success = ({ restart }: { restart: () => void }) => {
  return (
    <Stack align="center" gap="lg">
      <ThemeIcon size={64} radius="xl" style={{ backgroundColor: '#6c6ce5' }}>
        <IconCheck size={36} />
      </ThemeIcon>

      <Text ta="center" fw={600} size="lg">Thank you for using our service!</Text>
      <Text ta="center" size="sm" c="dimmed">
        Our manager will call you shortly to confirm your booking.
      </Text>

      <Group mt="md">
        <Button variant="outline" color="#6c6ce5" onClick={restart} radius="lg">
          Make another booking
        </Button>
      </Group>
    </Stack>
  );
}
