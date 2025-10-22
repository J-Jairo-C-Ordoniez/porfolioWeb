import homeContent from "../../../content/home/cHero";
import Header from "../../../ui/organisms/oHeader";
import WithoutProjects from '../../../ui/molecules/mError404'
import blogs from '../../../content/blogs/main';
import Blog from "../../../pages/blog/hero/Blog";


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