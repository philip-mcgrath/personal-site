import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Title } from '@mantine/core';


export default function Header() {
    return (
        <>
            <Title order={1}>Philip McGrath</Title>
            <ColorSchemeToggle />
            <Title order={2}>Full Stack Web Engineer</Title>
        </>
    );
}
