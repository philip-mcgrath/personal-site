'use client';

import { Group, Switch, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useState } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [checked, setChecked] = useState(false);

  const newColorScheme = checked ? 'dark' : 'light';
  setColorScheme(newColorScheme);

  return (
    <Group justify="center" mt="xl">
      {checked ? <IconMoon /> : <IconSun />}
      <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
    </Group>
  );
}