import { Title, Text } from '@mantine/core';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Header() {
    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                <Text inherit variant="gradient" component="span" gradient={{ from: "green", to: "blue" }}>
                    Philip McGrath
                </Text>
            </Title>
            <Title order={1} ta="center">Full Stack Web Engineer</Title>
            <ColorSchemeToggle />
        </>
    );
}
