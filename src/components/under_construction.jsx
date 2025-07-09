import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWrench } from '@fortawesome/free-solid-svg-icons';
export default function UnderConstruction(){
    return(
    <section className="py-12 px-auto md:text-4xl font-bold text-center text-3xl text-gray-500">
        <FontAwesomeIcon icon={faWrench} style={{fontSize:54,paddingBottom:12}} /><br/>Page Under Contruction
    </section>
    );
}