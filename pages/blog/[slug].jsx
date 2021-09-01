/* eslint-disable react/no-danger */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import { BannerBlog, BlogCard } from '@/components/index';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';
// import fetch from 'cross-fetch';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;
const URL_PACKAGE = process.env.NEXT_PUBLIC_DOMAIN;

function BlogPost({
  blog,
  destinations,
  packagetypes,
  notifications,
  popups,
  packagesAll,
  blogsPosts,
}) {
  const router = useRouter();
  const size = '2rem';
  const reg = /\/media/g;
  const content = blog.content.replace(reg, `${PUBLIC_API}/media`);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      popups={popups}>
      <Head>
        {blog.titleSEO ? <title>{blog.titleSEO}</title> : <title>{blog.title}</title>}
        <meta name="keywords" content={blog?.keywords} />
        <meta name="description" content={blog?.summary} />
      </Head>

      <div className="containerBox p-3 p-lg-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link
                href={`/blog/category/${blog.type_name
                  .toString()
                  .toLowerCase()
                  .replace(' ', '-')}`}>
                <a>{blog.type_name}</a>
              </Link>
            </li>
          </ol>
        </nav>
        <section>
          <h1 className={`${styles.title}`}>{blog?.title}</h1>
        </section>
        <section className={`${styles.boxMeta} pb-4`}>
          <div className="d-flex py-3">
            <h4 className="pr-3 border-right text-muted">
              Written by:
              <span className="text-underlined text-uppercase">
                {`${blog?.first_name} ${blog.last_name}`}
              </span>
            </h4>
            <h4 className="pl-3 text-muted">Published: {blog.created}</h4>
          </div>
          <div className={`${styles.boxSocial}`}>
            <FacebookShareButton url={URL_PACKAGE + router.asPath}>
              <FacebookIcon size={size} /> <p>Post</p>
            </FacebookShareButton>
            <TwitterShareButton url={URL_PACKAGE + router.asPath}>
              <TwitterIcon size={size} /> <p>Tweet</p>
            </TwitterShareButton>
            {blog.banner ? (
              <PinterestShareButton
                url={URL_PACKAGE + router.asPath}
                media={PUBLIC_API + blog?.banner}>
                <PinterestIcon size={size} /> <p>Pin</p>
              </PinterestShareButton>
            ) : null}
            <WhatsappShareButton url={URL_PACKAGE + router.asPath}>
              <WhatsappIcon size={size} /> <p>Share</p>
            </WhatsappShareButton>
            <EmailShareButton url={URL_PACKAGE + router.asPath}>
              <EmailIcon size={size} /> <p>Mail</p>
            </EmailShareButton>
            <p>Share the good stuff</p>
          </div>
        </section>
        {blog?.banner ? (
          <BannerBlog
            title={blog?.title}
            description={blog?.title}
            image={PUBLIC_API + blog?.banner}
            alt={blog?.title}
          />
        ) : null}
        <div className="row containerBox listStyle">
          <div
            className={`${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
      <section className="containerBox px-3 pb-4">
        <div className="row">
          <div className="col-12 pb-3">
            <h2 className="fs-20 font-weight-bold">Check our Recent Posts </h2>
          </div>
        </div>
        <div>
          {blogsPosts
            ? blogsPosts.map(item => (
                <div key={item.slug} className="col-12 col-md-6 col-lg-6 pb-4">
                  <BlogCard
                    key={item.title}
                    title={item.title}
                    destination={item.destination}
                    slug={item.slug}
                    thumbnail={item.thumbnail_cat}
                    description={item.content}
                    type={item.type_name}
                  />
                </div>
              ))
            : null}
        </div>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/blog/list/`);
  const blogs = await response.json();

  const paths = blogs.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/blog/${params.slug}`);
  const blog = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const blogsReq = await fetch(`${PUBLIC_API}/blog/`);
  const blogsPosts = await blogsReq.json();

  return {
    props: {
      blog,
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      popups,
      blogsPosts,
    },
    revalidate: 1,
  };
}

export default BlogPost;
