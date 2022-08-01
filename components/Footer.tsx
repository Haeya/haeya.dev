import { BlogInfo, Copyright, FooterContainer, SocialIcon, SocialIconWrap } from './Footer.style'
import metadata from '../data/metadata'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconWrap>
        {metadata.social.github && (
          <a href={metadata.social.github} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/github.svg" alt="github" />
          </a>
        )}
        {metadata.social.linkedin && (
          <a href={metadata.social.linkedin} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/linkedin.svg" alt="linkedin" />
          </a>
        )}
      </SocialIconWrap>
      <Copyright>
        Copyright © {new Date().getFullYear()} {metadata.author}
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
