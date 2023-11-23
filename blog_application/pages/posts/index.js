import AllPosts from "@/components/posts/all-posts";
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
function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostsPage;
