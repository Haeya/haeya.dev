// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
var urlFromFilePath = (doc) => {
  return doc._raw.flattenedPath.replace(/pages\/?/, "");
};
var Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `note/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true }
  },
  computedFields: {
    url_path: {
      type: "string",
      description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: urlFromFilePath
    },
    pathSegments: {
      type: "json",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).map((pathName) => {
        return { pathName };
      })
    }
  }
}));
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true },
    tags: {
      type: "list",
      required: true,
      of: {
        type: "string"
      },
      default: []
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog, Note],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  Blog,
  Note,
  contentlayer_config_default as default,
  urlFromFilePath
};
//# sourceMappingURL=compiled-contentlayer-config-3SPZDW6M.mjs.map
