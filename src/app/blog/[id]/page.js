import MError404 from "../../../ui/molecules/mError404";
import OHeader from "../../../ui/organisms/oHeader";
import blogs from "../../../content/blogs/main";
import SBlog from "../../../pages/blog/sBlog";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dataBlog = await blogs[id];

  if (!dataBlog) {
    return {
      title: "J Jairo | Blog",
      description: "Blog no encontrado",
    };
  }

  return {
    metadataBase: new URL("https://tu-dominio.com"),
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
      type: "website",
    },

    icons: {
      icon: dataBlog.avatar,
    },
  };
}

export default async function BlogPage({ params }) {
  const { id } = await params;
  const dataBlog = await blogs[id];

  if (!dataBlog) {
    return (
      <MError404
        title={`Upss! Blog ${id} no encontrado`}
        description="Lo sentimos, pero el blog que estás buscando no existe o ha sido movido."
        isPage
      />
    );
  }

  return (
    <>
      <OHeader data={dataBlog.head} />
      <SBlog data={dataBlog} />
    </>
  );
}
