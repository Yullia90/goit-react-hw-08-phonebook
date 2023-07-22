import { useTranslation } from 'react-i18next';

import {
  Container,
  Text,
  Title,
  RiGithubFillSt,
  RiLinkedinBoxLinSt,
  RiTelegramLineSt,
  SocialLi,
  SocialLink,
  WrapperSocial,
} from './Home.styled';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Text>{t('text')}</Text>

      <WrapperSocial>
        <SocialLi>
          <SocialLink href="https://t.me/tsarenko_yuliia" target="_blank">
            <RiTelegramLineSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://github.com/Yullia90/goit-react-hw-08-phonebook"
            target="_blank"
          >
            <RiGithubFillSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://www.linkedin.com/in/yuliia-tsarenko/"
            target="_blank"
          >
            <RiLinkedinBoxLinSt />
          </SocialLink>
        </SocialLi>
      </WrapperSocial>
    </Container>
  );
};
