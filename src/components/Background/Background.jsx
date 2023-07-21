import bg from "../../img/bg/bg.jpg"
import girl from '../../img/bg/girl.png';
import trees from '../../img/bg/trees.png';

import leaf_01 from '../../img/bg/leaf_01.png';
import leaf_02 from '../../img/bg/leaf_02.png';
import leaf_03 from '../../img/bg/leaf_03.png';
import leaf_04 from '../../img/bg/leaf_04.png';

import {
  GirlImg,
  ImgBg,
  Leaves,
  Section,
  Set,
  TressImg,
} from './Background.styled';

export const Background = () => {
    return (
        <Section>
            <Leaves>
                <Set>
                    <div>
                        <img src={leaf_01} alt="leaf_01" />
                    </div>
                    <div>
                        <img src={leaf_01} alt="leaf_02" />
                    </div>
                    <div>
                        <img src={leaf_01} alt="leaf_03" />
                    </div>
                    <div>
                        <img src={leaf_01} alt="leaf_04" />
                    </div>
                </Set>
            </Leaves>
            <ImgBg src={bg} alt="bg" />
            <GirlImg src={girl} alt="girl" />
            <TressImg src={trees} alt="trees" />
        </Section>
    );
};