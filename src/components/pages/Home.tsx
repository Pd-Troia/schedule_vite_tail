import { AboutUs } from './frame_page/AboutUs';
import Explain from './frame_page/Explain';
import { Footer } from './frame_page/Footer';
import HomeFront from './frame_page/HomeFront';
export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div className='bg-greybg'>
        <HomeFront/>
        <Explain/>
        <AboutUs/>
        <Footer/>
    </div>
  );
}

