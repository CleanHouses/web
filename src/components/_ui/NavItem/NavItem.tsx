import { FC, ReactNode } from "react";
import { NavLink } from 'react-router-dom';
import { Box, Text, Group } from '@mantine/core';

interface NavItemProps {
  label: string;
  to: string;
  icon: ReactNode;
  onClick: () => void;
}

export const NavItem:FC<NavItemProps> = ({ label, to, icon, onClick }) => {
  const active = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#6c6ce5" : "hsl(247,4%,58%)",
    '&:hover': {
      color: 'hsl(244, 24%, 26%)',
    },
  });

  return (
    <Box component="li" onClick={onClick}>
      <NavLink
        to={to}
        style={active}
      >
        <Group gap="xs" align="center">
          {icon}
          <Text size="sm" fw={600}>
            {label}
          </Text>
        </Group>
      </NavLink>
    </Box>
  )
};
