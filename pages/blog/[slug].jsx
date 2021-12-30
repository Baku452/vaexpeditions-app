/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { Modal } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';

import { BlogCard2, HeroBlog2 } from '@/components/index';
// import { bloggerAPI } from '@/core/index';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';
// import fetch from 'cross-fetch';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;
const URL_POST = process.env.NEXT_PUBLIC_DOMAIN;

function BlogPost({
  blog,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
  popularPosts,
}) {
  const router = useRouter();
  const size = '2rem';
  const reg = /\/media/g;
  const content = blog.content.replace(reg, `${PUBLIC_API}/media`);
  // const [author, setauthor] = useState({});
  // const [show, setShow] = useState(false);
  // async function getBlogger() {
  //   const { result } = await bloggerAPI({ author: blog.author });

  //   setauthor(result.data);
  // }
  const navBreadcrums = [
    {
      title: blog.destination,
      slug: `/blog/category/${blog.destination}`,
    },
  ];
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // useEffect(() => {
  //   getBlogger();
  // }, []);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      pixels={650}>
      <Head>
        {blog.titleSEO ? <title>{blog.titleSEO}</title> : <title>{blog.title}</title>}
        <meta name="keywords" content={blog?.keywords} />
        <meta name="description" content={blog?.summary} />
      </Head>

      {blog?.banner ? (
        <HeroBlog2
          title={blog?.title}
          description={blog?.title}
          image={PUBLIC_API + blog?.banner}
          alt={blog?.title}
          navBreadcrums={navBreadcrums}
          time={blog?.time_reading}
        />
      ) : null}

      <div className="containerBox row ">
        <section className={`${styles.boxMeta} containerBox pt-3 col-10 `}>
          <div className="d-flex ">
            <h4 className="pr-3 border-right text-muted d-flex">
              Written by:
              {/* <div role="button" type="button" onClick={handleShow}> */}
              <span className="text-underlined text-uppercase">
                {`${blog?.first_name} ${blog.last_name}`}
              </span>
              {/* </div> */}
            </h4>
            <h4 className="pl-3 text-muted">Published: {blog.created}</h4>
            {/* <Modal className="p-4 w-100" show={show} onHide={handleClose}>
              <Modal.Header closeButton className={`${styles.Head} w-100`}>
                <span>
                  <img
                    alt={author?.first_name + author?.last_name}
                    className={` ${styles.imgBlogHead} img-fluid `}
                    src={PUBLIC_API + author.image}
                  />
                </span>
                <Modal.Title className={`fw-bold ${styles.BlogTitle} `} />
              </Modal.Header>
              <Modal.Body>
                <div className="row p-4 ">
                  <div className="col-12 ">
                    <img
                      className={`
                      mb-4 img-fluid text-center col-12  ${styles.imgBlogger}`}
                      src={PUBLIC_API + author.image}
                      alt={author?.first_name + author?.last_name}
                    />
                  </div>
                  <div className="col-12">
                    <h3 className={`fw-bold ${styles.BlogTitle} `}>
                      {`${author?.first_name} ${author?.last_name}`}
                    </h3>
                  </div>
                  <div
                    className="col-12"
                    dangerouslySetInnerHTML={{ __html: author.biography }}
                  />
                </div>
              </Modal.Body>
            </Modal> */}
          </div>
        </section>
        <div className="row containerBox listStyle py-3 col-10">
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
            <EmailShareButton url={URL_POST + router.asPath}>
              <FaEnvelope size={size} /> <p>Mail</p>
            </EmailShareButton>
            <FacebookShareButton url={URL_POST + router.asPath}>
              <FaFacebook size={size} /> <p>Post</p>
            </FacebookShareButton>
            <TwitterShareButton url={URL_POST + router.asPath}>
              <FaTwitter size={size} /> <p>Tweet</p>
            </TwitterShareButton>
          </div>
        </section>
      </div>

      <section className="px-3 pb-4 background2 col-12">
        <div className="row mx-auto">
          <div className="col-12 p-5">
            <h2 className={`${styles.posts} fs-30 font-weight-bold text-center`}>
              POPULAR POSTS{' '}
            </h2>
          </div>
        </div>
        <div className="row containerBox">
          {popularPosts
            ? popularPosts.results.map(item => (
                <div key={item.slug} className="col-12 col-md-6 col-lg-3 pb-4">
                  <BlogCard2
                    key={item.title}
                    title={item.title}
                    destination={item.destination}
                    slug={item.slug}
                    thumbnail={item.thumbnail}
                    description={item.content}
                    type={item.type_name}
                    time={item.time_reading}
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

  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const reqPopularPosts = await fetch(`${PUBLIC_API}/blog/popular/`);
  const popularPosts = await reqPopularPosts.json();

  return {
    props: {
      blog,
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      popularPosts,
    },
    revalidate: 1,
  };
}

export default BlogPost;
