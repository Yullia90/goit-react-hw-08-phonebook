import bg from '../../img/bg/bg.jpg';
import plane from '../../img/bg/plane.png';


import skydriver_01 from '../../img/bg/skydriver_01.png';
import skydriver_02 from '../../img/bg/skydriver_02.png';
import skydriver_03 from '../../img/bg/skydriver_03.png';
import skydriver_04 from '../../img/bg/skydriver_04.png';

import { PlaneImg, ImgBg, Section, Leaves, Set } from './Background.styled';

export const Background = () => {
  return (
    <Section>
      <Leaves>
        <Set>
          <div>
            <img src={skydriver_01} alt="leaf_01" width={100} height={100} />
          </div>
          <div>
            <img src={skydriver_02} alt="leaf_02" width={100} height={100} />
          </div>
          <div>
            <img src={skydriver_03} alt="leaf_03" width={100} height={100} />
          </div>
          <div>
            <img src={skydriver_04} alt="leaf_04" width={100} height={100} />
          </div>
        </Set>
      </Leaves>
      <ImgBg src={bg} alt="bg" />
      <PlaneImg src={plane} alt="plane" width={1200} height={600} />
    </Section>
  );
};
