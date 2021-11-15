/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { BlogCard, HeroBlog, ShowMore } from '@/components/index';
import { posts } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function BlogPage({
  destinations,
  packagetypes,
  notifications,
  popups,
  packagesAll,
  blogtypesRes,
  interests,
}) {
  const [postList, setPostList] = useState([]);
  const [destinationsActive, setDestinationsActive] = useState();
  const [typeActive, setTypeActive] = useState();
  const [interestActive, setInterest] = useState();
  const [numberPosts, setNumberPosts] = useState(0);
  const [queryBlog, setQueryBlog] = useState('');
  const [offset, setOffset] = useState(1);

  async function fetchMorePosts() {
    setOffset(prevState => prevState + 1);
    const { result } = await posts({ queryParams: queryBlog, offset });
    setPostList([...postList, ...result?.data.results]);
  }

  function handleMoreitems() {
    fetchMorePosts();
  }
  function handleChangeDestination(event) {
    setDestinationsActive(event.target.value);
  }
  function handleChangeTypes(event) {
    setTypeActive(event.target.value);
  }

  function handleChangeInterest(event) {
    setInterest(event.target.value);
  }

  async function fetchPosts() {
    const destQuery = destinationsActive ? `&destination=${destinationsActive}` : '';
    const typeQuery = typeActive ? `&types=${typeActive}` : '';
    const interesteQuery = interestActive ? `&interest=${interestActive}` : '';

    setQueryBlog(destQuery + typeQuery + interesteQuery);

    const { result } = await posts({
      queryParams: destQuery + typeQuery + interesteQuery,
    });
    setPostList(result?.data.results);
    setNumberPosts(result?.data.count);
    setOffset(1);
  }

  useEffect(() => {
    fetchPosts();
  }, [destinationsActive, typeActive, interestActive]);
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      popups={popups}
      pixels={700}
      interests={interests}>
      <Head>
        <title>Blog | Va Expeditions</title>
        <meta name="description" content="Blog Va Expeditions" />
      </Head>
      <HeroBlog
        title="Blog Va Expeditions"
        description="12 years of experience, 84,000+ travellers 
        13 Destinations 100% Satisfaction"
        image="/images/blog-banner.jpg"
        alt="blogVT"
      />
      {/* <section id="categories" className="container">
          <CountryFilter items={blogtypesRes}/>
      </section> */}
      <div className="containerBox  pt-5">
        <section id="filter" className="row pb-5">
          <div className="col-12 col-lg-4 mx-auto px-3">
            <Form.Control as="select" onChange={event => handleChangeDestination(event)}>
              <option value="">DESTINATION</option>
              {destinations.length > 0 &&
                destinations[0].destinations.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.title} - {item.sub_title}
                  </option>
                ))}
            </Form.Control>
          </div>
          <div className="col-12 col-lg-4 mx-auto px-3">
            <Form.Control as="select" onChange={event => handleChangeTypes(event)}>
              <option value="">CATEGORY</option>
              {blogtypesRes.length > 0 &&
                blogtypesRes.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.title}
                  </option>
                ))}
            </Form.Control>
          </div>
          <div className="col-12 col-lg-4 mx-auto px-3">
            <Form.Control as="select" onChange={event => handleChangeInterest(event)}>
              <option value="">INTEREST</option>
              {interests.length > 0 &&
                interests.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.title}
                  </option>
                ))}
            </Form.Control>
          </div>
        </section>
        <section className="">
          <div className="col-12">
            <section className="mx-auto ">
              {postList
                ? postList.map(item => (
                    <div key={item.slug} className="col-12">
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
              {postList && postList.length < numberPosts ? (
                <ShowMore eventHandler={handleMoreitems} />
              ) : null}
            </section>
          </div>
        </section>
      </div>
    </Base>
  );
}

export async function getStaticProps() {
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

  const blogsReq = await fetch(`${PUBLIC_API}/blog/list/`);
  const blogsPosts = await blogsReq.json();

  const blogtypes = await fetch(`${PUBLIC_API}/blogtypes/`);
  const blogtypesRes = await blogtypes.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();
  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      popups,
      blogsPosts,
      blogtypesRes,
      interests,
    },
    revalidate: 1,
  };
}

export default BlogPage;
