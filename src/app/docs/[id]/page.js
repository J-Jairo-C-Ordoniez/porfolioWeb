import Error404 from "@/features/home/components/ui/Error404";
import data from "@/features/docs/data/main";
import Header from "@/features/docs/components/header/Header";
import Main from "@/features/docs/components/main/Main";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dataProject = await data[id];

  if (!dataProject) {
    return {
      title: "J Jairo | proyecto",
      description: "Proyecto no encontrado",
    };
  }

  return {
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
    alternates: {
      canonical: dataProject.url,
    },
    icons: {
      icon: dataProject.avatar,
    },
  };
}

export default async function DocPage({ params }) {
  const { id } = await params;
  const dataProject = await data[id];

  if (!dataProject) {
    return (
      <Error404
        title={`Upss! Proyecto ${id} no encontrado`}
        description="Lo sentimos, pero el proyecto que estás buscando no existe o ha sido movido."
        isPage
      />
    );
  }

  return (
    <>
      <Header
        title={dataProject.title}
        link={`/docs/${id}`}
      />
      <Main data={dataProject.documentation} />
    </>
  );
}
