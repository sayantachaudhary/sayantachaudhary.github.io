import md from "markdown-it";
import anchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  const mdLibrary = md().use(anchor);
  eleventyConfig.setLibrary("md", mdLibrary);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: ".",
      output: "./_site",
      layouts: "./blog/_layouts/",
      templateFormats: ["html", "md", "njk"],
    },
  };
}
