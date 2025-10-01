import homeContent from "../../../content/home";
import Header from "../../../ui/organisms/Header";
import WithoutProjects from '../../../ui/molecules/WithoutProjects'
import projects from '../../../content/docs/main';
import Doc from '../../../pages/projects/doc';


export default async function DocPage({ params }) {
  const { id } = await params;
  const dataProject = await projects[id]

  if (!dataProject) {
    return <WithoutProjects />
  }

  return (
     <>
      <Header logo={homeContent.logo} links={dataProject.menu} />
      <Doc project={dataProject} />
    </>
  );
}