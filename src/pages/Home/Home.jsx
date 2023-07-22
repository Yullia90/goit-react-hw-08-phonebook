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
          <SocialLink href="https://t.me/nechaev_roma" target="_blanc">
            <RiTelegramLineSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://github.com/Roman-Nechaev/goit-react-hw-08-phonebook"
            target="_blanc"
          >
            <RiGithubFillSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://www.linkedin.com/in/roman-kolenko/"
            target="_blanc"
          >
            <RiLinkedinBoxLinSt />
          </SocialLink>
        </SocialLi>
      </WrapperSocial>
    </Container>
  );
};
