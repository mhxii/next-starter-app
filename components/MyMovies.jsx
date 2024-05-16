import Image from "next/image";
import ImageFaille from '../public/images/LA FAILLE.png';

function MyMovies(){
    return(
        <div>
            <Image src={ImageFaille} width={500} height={500} />
        </div>
    )
}

export default MyMovies;