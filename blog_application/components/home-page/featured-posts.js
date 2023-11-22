import React from "react";
import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
function FeaturedPosts(props) {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-next.js",
      title: "Getting Started with Next Js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React Framework",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-next.js2",
      title: "Getting Started with Next Js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React Framework",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-next.js3",
      title: "Getting Started with Next Js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React Framework",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-next.js4",
      title: "Getting Started with Next Js",
      image: "getting-started-nextjs.png",
      excerpt: "NextJs is a React Framework",
      date: "2022-02-10",
    },
  ];
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={DUMMY_POSTS} />
    </section>
  );
}

export default FeaturedPosts;
