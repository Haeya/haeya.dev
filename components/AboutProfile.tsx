import Image from 'next/image'
import Link from 'next/link'
import { AboutProfileContainer, ProfileText, ProfileTextSub, Resume } from './AboutProfile.style'

const AboutProfile = () => {
  return (
    <AboutProfileContainer>
      <Image
        src="/about/about.jpeg"
        className="round-image"
        alt="haeya"
        width={300}
        height={300}
        objectFit="cover"
      />
      <ProfileText>
        Product 관점에서 서비스를 개발하고 싶어하는 백엔드 개발자 입니다.
        <br />
        <br />
        개발하기 편한 방향만 쫓는 것이 아닌 비즈니스 관점에서 성장이 되는 방식을 선호합니다.
        <br />
        계속 서비스의 문제점과 로직의 효율을 찾습니다.
        <br />
        <br />
        찾아낸 것들을 공유하고 발전시키는데 보람을 느낍니다.
        <br />
        <ProfileTextSub>
        </ProfileTextSub>
        <br />
        <br />
        <Link href="/resume" passHref>
          <Resume>Resume</Resume>
        </Link>
      </ProfileText>
    </AboutProfileContainer>
  )
}

export default AboutProfile
