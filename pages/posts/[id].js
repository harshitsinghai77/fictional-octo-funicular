import { useRouter } from "next/router";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/posts/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/posts/post-header";
import { getPostById, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/posts/post-title";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} defaultSEOImage={false}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <SEO
                title={post.title}
                contentDescription={post.title}
                contentImage={post.coverImage}
              />
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostById(params.id, [
    "title",
    "date",
    "id",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["id"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.id,
        },
      };
    }),
    fallback: false,
  };
}
