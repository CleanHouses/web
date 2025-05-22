import { Button, Group, Text } from '@mantine/core';
import { IconCalendarEvent } from '@tabler/icons-react';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import styles from '../../BookingStepper.module.scss';

export const DateSelectionStep = ({ form, setForm, nextStep, prevStep }: any) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!form?.dates || form.dates?.length === 0) {
      setError(true);
    } else {
      setError(false);
      nextStep();
    }
  };

  return (
    <div className={styles.formStep}>
      <Group gap={4} mb="sm" align="center">
        <IconCalendarEvent size={16} />
        <Text fw={500}>
          Select available dates <Text span c="red">*</Text>
        </Text>
      </Group>

      <DatePicker
        type="multiple"
        withCellSpacing
        value={form.dates || []}
        onChange={(value) => setForm((f: any) => ({ ...f, dates: value }))}
        size="xl"
        classNames={{
          day: styles.day,
        }}
        className={styles.calendar}
      />

      {error && (
        <Text c="red" size="sm" mt="xs">
          Please select at least one date.
        </Text>
      )}

      <Group justify="space-between" mt="md">
        <Button variant="light" onClick={prevStep} radius="lg">
          Back
        </Button>
        <Button
          onClick={handleNext}
          className={styles.nextButton}
          radius="lg"
          style={{ backgroundColor: '#6c6ce5' }}
          disabled={!form.dates || form.dates.length === 0}
        >
          Next
        </Button>
      </Group>
    </div>
  );
};
