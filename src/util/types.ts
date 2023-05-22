export type Tag = {
    id: number;
    title: string;
}

export type Category = {
    id: number;
    title: string;
}

export type Article = {
    id: string;
    title: string;
    content: string;
    category: Category;
    articleTags: Tag[];
    createdAt: Date | null;
    updatedAt: Date | null;
    isDraft: boolean;
}

export type Fetch = (
    input: RequestInfo | URL,
    init?: RequestInit
) => Promise<Response>