import MainPlayer from "./player/MainPlayer";
import Finance from "./finance/Finance.jsx";
export default function Header(){
    return (
        <header id='header' className='flex--row'>
            <MainPlayer/>
            <Finance/>
        </header>
    )
}