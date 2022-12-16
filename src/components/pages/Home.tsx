import * as React from 'react';
import { AboutUs } from './frame_page/AboutUs';
import Explain from './frame_page/Explain';
import HomeFront from './frame_page/HomeFront';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div>
        <HomeFront/>
        <Explain/>
        <AboutUs/>
    </div>
  );
}

