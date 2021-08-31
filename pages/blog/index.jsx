/* eslint-disable react/no-danger */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';

import { AsideBlog, BlogCard, Hero } from '@/components/index';
import { posts } from '@/core/index';
import { Base } from '@/layouts/index';

SwiperCore.use([Navigation]);
// import fetch from 'cross-fetch';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function BlogPost({
  destinations,
  packagetypes,
  notifications,
  popups,
  packagesAll,
  blogtypesRes,
}) {
  const router = useRouter();
  const [postList, setPostList] = useState([]);

  async function fetchPosts() {
    const [, querySet] = router.asPath.split('?');
    const queryParams = querySet ? `?${querySet}` : '';
    const { result } = await posts({ queryParams });
    setPostList(result?.data);
  }

  useEffect(() => {
    fetchPosts();
  }, [router]);
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      popups={popups}>
      <Head>
        <title>Blog | Va Expeditions</title>
        <meta name="description" content="Blog Va Expeditions" />
      </Head>
      <Hero
        title="Blog Va Expeditions"
        description="12 years of experience, 84,000+ travellers 
        13 Destinations 100% Satisfaction"
        image="/images/blog-banner.jpg"
        alt="blogVT"
      />
      {/* <section id="categories" className="container">
          <CountryFilter items={blogtypesRes}/>
      </section> */}
      <section className="containerBox px-3 pt-5">
        <div className="row">
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <div className="row">
              <div className="col-12 pb-3">
                <h2>Trending Posts </h2>
                <p>
                  Rediscover the wonder of the world – and book the travel you've missed.
                </p>
              </div>
            </div>
            <section className="mx-auto row py-3">
              <div className="row">
                {postList
                  ? postList.map(item => (
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
          </div>
          <AsideBlog destinations={destinations} blogtypesRes={blogtypesRes} />
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
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

  const blogsReq = await fetch(`${PUBLIC_API}/blog/list/`);
  const blogsPosts = await blogsReq.json();

  const blogtypes = await fetch(`${PUBLIC_API}/blogtypes/`);
  const blogtypesRes = await blogtypes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      popups,
      blogsPosts,
      blogtypesRes,
    },
    revalidate: 1,
  };
}

export default BlogPost;
