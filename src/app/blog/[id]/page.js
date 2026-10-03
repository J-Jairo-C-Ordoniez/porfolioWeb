import Error404 from "@/features/home/components/ui/Error404";
import data from "@/features/blog/data/main";
import Header from "@/features/blog/components/header/Header";
import Main from "@/features/blog/components/main/Main";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dataBlog = await data[id];

  if (!dataBlog) {
    return {
      title: "J Jairo | Blog",
      description: "Blog no encontrado",
    };
  }

  return {
    title: dataBlog.subtitle,
    description: dataBlog.description,
    openGraph: {
      title: dataBlog.subtitle,
      description: dataBlog.description,
      url: dataBlog.url,
      siteName: dataBlog.subtitle,
      images: [
        {
          url: dataBlog.avatar,
          width: 1200,
          height: 630,
          alt: `Avatar de ${dataBlog.subtitle}`,
        },
      ],
      locale: "es_COL",
      type: "article",
    },
    alternates: {
      canonical: dataBlog.url,
    },
    icons: {
      icon: dataBlog.avatar,
    },
  };
}

export default async function BlogPage({ params }) {
  const { id } = await params;
  const dataBlog = await data[id];

  if (!dataBlog) {
    return (
      <Error404
        title={`Upss! Blog no encontrado`}
        description="Lo sentimos, pero el blog que estás buscando no existe o ha sido movido."
        isPage
      />
    );
  }

  return (
    <>
      <Header
        title={dataBlog.subtitle}
        link={`/blog/${id}`}
      />
      <Main data={dataBlog} />
    </>
  );
}
