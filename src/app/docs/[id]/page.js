import MError404 from '../../../ui/molecules/mError404'
import projects from '../../../content/docs/main';
import OHeader from "../../../ui/organisms/oHeader";
import SDoc from '@/pages/doc/sDoc';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dataProject = await projects[id]

  if (!dataProject) {
    return ({
      title: "J Jairo | proyecto",
      description: "Proyecto no encontrado",
    })

  }

  return ({
    title: dataProject.title,
    description: dataProject.description,
    openGraph: {
      title: dataProject.title,
      description: dataProject.description,
      url: dataProject.url,
      siteName: dataProject.title,
      images: [
        {
          url: dataProject.avatar,
          width: 1200,
          height: 630,
          alt: `Avatar de ${dataProject.title}`,
        },
      ],
      locale: "es_COL",
      type: "website",
    },

    icons: {
      icon: dataProject.avatar,
    }
  })
}


export default async function DocPage({ params }) {
  const { id } = await params;
  const dataProject = await projects[id]

  if (!dataProject) {
    return (
      <MError404
        title={`Upss! Proyecto ${id} no encontrado`}
        description="Lo sentimos, pero el proyecto que estás buscando no existe o ha sido movido."
      />
    )
  }

  return (
    <>
      <OHeader data={dataProject.head} />
      <SDoc data={dataProject} />
    </>
  )
}