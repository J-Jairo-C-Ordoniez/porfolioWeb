import homeContent from "../../../content/home/cHero";
import Header from "../../../ui/organisms/oHeader";
import WithoutProjects from '../../../ui/molecules/mError404'
import projects from '../../../content/docs/main';
import Doc from '../../../pages/doc/hero/doc';


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