import homeContent from "../../../content/home";
import Header from "../../../ui/organisms/Header";
import WithoutProjects from '../../../ui/molecules/WithoutProjects'
import blogs from '../../../content/blogs/main';
import Blog from "../../../pages/blog/Blog";


export default async function DocPage({ params }) {
  const { id } = await params;
  const dataBlog = await blogs[id];

  if (!dataBlog) {
    return <WithoutProjects />
  }

  return (
     <>
      <Header logo={homeContent.logo} />
      <Blog dataBlog={dataBlog} />
    </>
  );
}