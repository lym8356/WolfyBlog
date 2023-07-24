export type Tag = {
    id: number;
    title: string;
}

export type Category = {
    id: number;
    title: string;
    articleCount: number;
}

export type Article = {
    id: string;
    title: string;
    titleSlug: string;
    content: string;
    category: Category;
    articleTags: Tag[];
    createdAt: Date | null;
    updatedAt: Date | null;
    isDraft: boolean;
    comments: Comment[];
}

export type Album = {
    id: number;
    title: string;
    description: string;
    cover: string;
    albumPhotos: Photo[];
}

export type Photo = {
    id: string;
    publicId: string;
    url: string;
}

export type Comment = {
    id: string;
    content: string;
    createdAt: Date | null;
    commenterUsername: string;
    commenterEmail: string;
    parentCommentId: string;
    replyToArticleId: string;
    replies: Comment[];
}

export type CommentFormValues = {
    content: string;
    commenterUsername: string;
    commenterEmail: string;
    parentCommentId: string | null;
    replyToArticleId: string | null;
}

export type SiteLog = {
    id: number;
    description: string;
    dateAdded: Date;
}

export type Project = {
    id: number;
    title: string;
    description: string;
    link: string;
    cover: string;
}

export type AboutPage = {
    id: number;
    content: string;
    isAboutSite: boolean;
}

export type Fetch = (
    input: RequestInfo | URL,
    init?: RequestInit
) => Promise<Response>

export type FetchResponse = {
    data: any,
    headers: Headers
}

// export type FetchError = {
//     status: string,
//     message: string
// }

export type PaginationHeaderData = {
    previousPageLink: string | null;
    nextPageLink: string | null;
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
}