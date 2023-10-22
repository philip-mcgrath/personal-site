'use client';

import { Group, Switch, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ChangeEvent, useState } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [checked, setChecked] = useState(false);

  const setToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    setColorScheme(event.currentTarget.checked ? 'dark' : 'light')
  }

  return (
    <Group justify="center" mt="xl">
      {checked ? <IconMoon /> : <IconSun />}
      <Switch checked={checked} onChange={(event) => setToggle(event)} />
    </Group>
  );
}