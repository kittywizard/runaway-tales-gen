
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

export default function Nav() {

    return (
        <ul className="hidden md:flex items-center justify-between">
            <li className='p-4'>
                <a href="http://github.com/kittywizard/RaTsGenerator"
                    target="_blank"
                    rel="noreferrer"
                    alt="Github"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-3xl text-dark-green hover:text-gray-dark"/>
                </a>
            </li>
            <li>
            <a href="http://autocode.com"
                    target="_blank"
                    rel="noreferrer"
                    alt="Discord Bot"
                >
                <FontAwesomeIcon icon={faDiscord} className="text-3xl text-dark-green hover:text-gray-dark"/>
            </a>
            </li>
        </ul>
    )
}