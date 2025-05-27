import { TextInput, Textarea, Stack, Card, Center } from "@mantine/core";
import { IconAt, IconMessage, IconUser } from "@tabler/icons-react";
import { useState, useEffect } from 'react';
import { Button, PageHeader } from "../../components";

export const Contacts = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isValid =
      form.name.trim() !== '' &&
      form.email.trim() !== '' &&
      form.message.trim() !== '';
    setDisabled(!isValid);
  }, [form]);

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Submitted:', form);
    // You can add actual submission logic here
  };

  return (
    <Center py="xl" px="md">
        <Stack gap="md">
          <PageHeader title="Got any questions?" text="If you have any questions or need further information, feel free to reach out using the form below."/>
          <Card w="100%" radius="lg" shadow="lg" withBorder>
          <TextInput
            label="Your Name"
            leftSection={<IconUser size={16} />}
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange('name')}
            required
            radius="lg"
            mb='md'
          />

          <TextInput
            label="Email"
            placeholder="Enter your email"
            leftSection={<IconAt size={16} />}
            value={form.email}
            onChange={handleChange('email')}
            required
            radius="lg"
            type="email"
            mb='md'
          />

          <Textarea
            label="Message"
            leftSection={<IconMessage size={16} />}
            placeholder="Write your feedback here..."
            value={form.message}
            onChange={handleChange('message')}
            required
            radius="lg"
            minRows={4}
            mb='md'
          />

          <Button
            onClick={handleSubmit}
            disabled={disabled}
            radius="lg"
            mt="lg"
          >
            Send
          </Button>
          </Card>
        </Stack>
    </Center>
  );
};
