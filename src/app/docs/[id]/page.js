import WithoutProjects from '../../../ui/molecules/WithoutProjects'
import projects from '../../../content/docs/main';
import PageProject from '../../../ui/organisms/pageProject';


export default async function DocPage({ params }) {
  const { id } = params;
  const dataProject = projects[id]

  if (!dataProject) {
    return (<WithoutProjects />)
  }

  return (
    <PageProject project={dataProject} />
  );
}