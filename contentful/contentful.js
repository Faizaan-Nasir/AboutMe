import { createClient } from "contentful";
import { remark } from "remark";
import html from "remark-html";
const client = createClient({
    space: process.env["NEXT_PUBLIC_CONTENTFUL_SPACE_ID"],
    accessToken: process.env["NEXT_PUBLIC_CONTENTFUL_API_TOKEN"],
});

export let GetProjects = async (max) => {
    let res = await client.getEntries({
        content_type: "projects",
        select: "sys.id,fields.name,fields.link,fields.imageLink,fields.description",
        order: "-sys.createdAt",
        limit: `${max}`,
    });

    return res.items;
};

export let GetUpdates = async (max) => {
    let res = await client.getEntries({
        content_type: "updates",
        select: "sys.id,fields.dateOfEntry,fields.description",
        order: "-sys.createdAt",
        limit: `${max}`,
    });
    const resEd = await Promise.all(
        res.items.map(async (r) => {
            const content = await remark()
                .use(html)
                .process(r.fields.description);
            r.fields.description = content.toString();
            return r;
        })
    );
    return resEd;
};
