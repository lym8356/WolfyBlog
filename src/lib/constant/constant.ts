import {env} from '$env/dynamic/public';
export const siteName = "WoflyBlog";

export const siteDescription = "Welcome to my personal blog, a digital chronicle of my journey as a developer. Here, I share challenges faced and conquered in my career and studies, turning obstacles into lessons. This space serves as a testament to my growth and a resource for fellow coders. Dive in to discover my story, experiences, and the insights gathered along the way to competence. Welcome to the journey.";

export const authorName = "lym8356";


// need to use environment variables 
export const siteUrl = env.PUBLIC_SITE_URL;

export const adminSiteUrl = env.PUBLIC_ADMIN_SITE_URL;
// export const backendURL = "http://localhost:21777/api";
export const backendURL = env.PUBLIC_API_URL;
// console.log(backendURL)


export const siteGitHub = "https://github.com/lym8356/WolfBlog";

export const gitHub = "https://github.com/lym8356";

export const youtube = "https://www.youtube.com/@luadam1833/videos";

export const linkedIn = "https://www.linkedin.com/in/adam-lu-3a1b49203"

export const navigationLinks = {
    Home: "Home",
    HomeURL: "/",
    Articles: "Articles",
    ArticlesURL: "/articles",
    Albums: "Albums",
    AlbumURL: "/albums",
    Discussion: "Discussion",
    DiscussionURL: "/discussion",
    SiteLogs: "Site Logs",
    SiteLogURL: "/siteLogs",
    Projects: "Projects",
    ProjectURL: "/projects",
    About: "About",
    AboutURL: "/about"
}

// default search fields
export const defaultPageSize = 10;
export const defaultPageNumber = 1;
export const defaultArticleSearchFields = "title,titleSlug,createdAt";