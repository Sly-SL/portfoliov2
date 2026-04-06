import type {MetadataRoute} from "next";
import {getProjectsQuery} from "@/lib/firebase/queries/get-projects.query";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects = await getProjectsQuery();

    return [
        {
            url: "https://slysl.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://slysl.vercel.app/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://slysl.vercel.app/projects",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://slysl.vercel.app/media",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        ...projects.map((project) => ({
            url: `https://slysl.vercel.app/projects/${project.id}`,
            lastModified: new Date(), // или project.updatedAt, если есть
            changeFrequency: "weekly",
            priority: 0.9,
        } as {
            url: string;
            lastModified?: string | Date | undefined;
            changeFrequency?: "weekly" | "always" | "hourly" | "daily" | "monthly" | "yearly" | "never" | undefined;
            priority?: number | undefined;
        })),
    ];
}