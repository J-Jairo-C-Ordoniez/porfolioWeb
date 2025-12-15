import blogs from "../content/blogs/main";
import projects from "../content/docs/main";

export default async function sitemap() {
    const baseUrl = "https://tu-dominio.com";

    const routes = ["", "/blog", "/docs"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 1,
    }));

    const blogRoutes = Object.keys(blogs).map((id) => ({
        url: `${baseUrl}/blog/${id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    const docRoutes = Object.keys(projects).map((id) => ({
        url: `${baseUrl}/docs/${id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [...routes, ...blogRoutes, ...docRoutes];
}
