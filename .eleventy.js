export default function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("js");
  // eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "./blog/posts",
      output: "./_site",
      layouts: "../_layouts",
    },
  };
}
