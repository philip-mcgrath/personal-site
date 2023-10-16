import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Body() {
    return (
        <>
            <Link href={'https://github.com/philip-mcgrath'}>
                <FaGithub size={32} /> Github
            </Link>
            <Link href={'https://www.linkedin.com/in/philip-mcgrath-098327164/'}>
                <FaLinkedin size={32} /> LinkedIn
            </Link>
        </>
    );
}
