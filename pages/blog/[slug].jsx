/* eslint-disable react/no-danger */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

import { HeroBlog, BlogCard2 } from '@/components/index';
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
  const navBreadcrums = [
    {
          title: blog.destination,
          slug: `/blog/category/${blog.destination}`,
    },
    {
          title: blog.type_name,
          slug: `/blog/category/${blog.type_name}`,
      },
  ];

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      popups={popups}
      pixels={200}>
      <Head>
        {blog.titleSEO ? <title>{blog.titleSEO}</title> : <title>{blog.title}</title>}
        <meta name="keywords" content={blog?.keywords} />
        <meta name="description" content={blog?.summary} />
      </Head>

      {blog?.banner ? (
          <HeroBlog
            title={blog?.title}
            description={blog?.title}
            image={PUBLIC_API + blog?.banner}
            alt={blog?.title}
            navBreadcrums={navBreadcrums}
          />
      ) : null}
      
      <div className="containerBox  p-5">
        <section className={`${styles.boxMeta} `}>
          <div className="d-flex ">
            <h4 className="pr-3 border-right text-muted">
              Written by:
              <span className="text-underlined text-uppercase">
                {`${blog?.first_name} ${blog.last_name}`}
              </span>
            </h4>
            <h4 className="pl-3 text-muted">Published: {blog.created}</h4>
          </div>
          </section>
        <div className="row containerBox listStyle">
          <div
            className={`${styles.content}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      <div className="containerBox">
      <section className={`${styles.boxMeta2}  `}>
            <h2 className="p-3">SHARE THIS POST </h2>
          <div className={`${styles.boxSocial} pb-5`}>
            <EmailShareButton url={URL_PACKAGE + router.asPath}>
              <EmailIcon size={size} /> <p>Mail</p>
            </EmailShareButton>
            <FacebookShareButton url={URL_PACKAGE + router.asPath}>
              <FaFacebook size={size} /> <p>Post</p>
            </FacebookShareButton>
            <TwitterShareButton url={URL_PACKAGE + router.asPath}>
              <FaTwitter size={size} /> <p>Tweet</p>
            </TwitterShareButton>
          </div>
        </section>
        </div>

        <section className="px-3 pb-4 background2 col-12">
        <div className="row mx-auto">
          <div className="col-12 p-5">
            <h2 className={`${styles.posts} fs-30 font-weight-bold text-center`}>POPULAR POSTS </h2>
          </div>
        </div>
        <div className="row containerBox">
          {blogsPosts
            ? blogsPosts.results.map(item => (
                <div key={item.slug} className="col-12 col-md-6 col-lg-3 pb-4">
                  <BlogCard2
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

  const paths = blogs.results.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/blog/${params.slug}`);
  const blog = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
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
