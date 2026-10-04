export default async function sitemap() {
    const baseUrl = "https://jhonatan-dev.com";

    const routes = [
        "",
        "/projects/koda",
        "/projects/dreamlabs",
        "/projects/bloodyyue",
        "/projects/focusfy",
        "/projects/tim",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
