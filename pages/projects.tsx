import Title from '../components/Title'
import projects from '../data/projects'
import ProjectCards from '../components/ProjectCard'
import Container from '../components/Container'
import metadata from '../data/metadata'
import { NextSeo } from 'next-seo'

function Projectspage() {
  return (
    <Container>
      <NextSeo
        title="Projects"
        description="참여했던 프로젝트들을 정리하는 곳"
        canonical={`${metadata.meta.url}/projects`}
        openGraph={{ url: `${metadata.meta.url}/projects` }}
      />
      <Title title="Projects" des={`참여했던 프로젝트들을 정리하는 곳`} />
      <ProjectCards projects={projects} />
    </Container>
  )
}

export default Projectspage
