import { writable } from "svelte/store";
import type { Article, Category, Tag } from "../util/types";

export const articleStore = writable<Article[]>([]);

export const tagStore = writable<Tag[]>([]);

export const categoryStore = writable<Category[]>([]);
