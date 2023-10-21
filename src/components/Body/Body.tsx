'use client';

import { Flex } from '@mantine/core';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import classes from './Body.module.css';


export default function Body() {
    return (
        <>
            <Flex className={classes.bodyText} justify="center" mt={50} direction="column" align="center" gap="lg">
                <div className={classes.item}>
                    <Link href={'https://github.com/philip-mcgrath'}>
                        <Flex align="center" gap="md" direction="row">
                            <FaGithub size={40} /> Github
                        </Flex>
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link href={'https://www.linkedin.com/in/philip-mcgrath-098327164/'}>
                        <Flex align="center" gap="md" direction="row">
                            <FaLinkedin size={40} /> LinkedIn
                        </Flex>
                    </Link>
                </div>
            </Flex>
        </>
    );
}
