// File: steps/EmployeeSelectionStep.tsx
import { Button, Group, Text, Avatar, MultiSelect, Stack, ScrollArea, Box } from "@mantine/core";
import { IconUser, IconUserCog } from "@tabler/icons-react";
import { useState } from 'react';
import styles from '../../BookingStepper.module.scss';
import { StepsFooter } from "../../../../components";

const employees = [
  { value: 'any', label: 'Any Available', avatar: null },
  { value: 'alice', label: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { value: 'bob', label: 'Bob Smith', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { value: 'carol', label: 'Carol White', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
];

const employeeData: any = employees.map((emp) => ({
  value: emp.value,
  label: (
    <Group>
      {emp.avatar ? <Avatar src={emp.avatar} size="xs" /> : <Avatar size="xs" radius="xl">?</Avatar>}
      <Text>{emp.label}</Text>
    </Group>
  ),
}));

export const EmployeeSelectionStep = ({ form, setForm, nextStep, prevStep }: any) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (form.employees.length === 0) {
      setError(true);
    } else {
      setError(false);
      nextStep();
    }
  };


  const toggleStaff = (value: string) => {
    setForm((prev: any) => {
      const newStaff = prev.employees.includes(value)
        ? prev.employees.filter((s: any) => s !== value)
        : [...prev.employees, value];
      return { ...prev, employees: newStaff };
    });
  };

  return (
    <div className={styles.formStep}>
      <Group gap={4} mb="sm">
        <IconUserCog size={16} />
        <Text fw={500}>Select preferred employees <Text span c="red">*</Text></Text>
      </Group>

      <MultiSelect
        label="Choose preferred staff"
        placeholder="Search or select staff"
        searchable
        data={employees}
        value={form.employees}
        onChange={(employees) => setForm({ ...form, employees })}
      />

      <Box mt="md">
        <Text size="sm" mb="xs">
          Or select from the list below:
        </Text>
        <ScrollArea h={120}>
          <Group gap="xs" wrap="wrap">
            {employees.map((employee: any) => (
              <Stack
                key={employee.value}
                align="center"
                gap={4}
                onClick={() => toggleStaff(employee.value)}
                style={{
                  cursor: 'pointer',
                  border:
                    form.employees?.includes(employee.value) && employee.value !== 'any'
                      ? '2px solid hsl(43, 100%, 68%)'
                      : '1px solid #ccc',
                  padding: 8,
                  borderRadius: 8,
                  width: 80,
                  textAlign: 'center',
                }}
              >
                <Avatar
                  src={employee.avatar}
                  alt={employee.label}
                  radius="xl"
                  size="md"
                  color="hsl(43, 100%, 68%)"
                />
                <Text size="xs">{employee?.label.split(' ')[0]}</Text>
              </Stack>
            ))}
          </Group>
        </ScrollArea>
      </Box>
      <StepsFooter onNext={handleNext} onBack={prevStep}/>
    </div>
  );
}
