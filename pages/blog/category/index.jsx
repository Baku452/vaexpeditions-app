/* eslint-disable react/no-danger */
import Head from 'next/head';

import { CategoryCard } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function CategoryBlog({
  destinations,
  packagetypes,
  notifications,
  popups,
  packagesAll,
  blogtypesRes,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      popups={popups}>
      <Head>
        <title>Blog| Explore Topics</title>
        <meta name="description" content="Topics about Blog" />
        <meta name="title" content="Explore topics - Blog Va Expeditions" />
        <meta property="og:title" content="Explore topics - Blog" />
      </Head>
      <section className="containerBox row">
        <div className="col-12 text-left pt-3 pt-lg-5 pb-5">
          <h1>Explore topics</h1>
        </div>
      </section>
      <section className="containerBox px-3 row mb-5">
        <div className="col-12 mb-3">
          <h2 className=" border-bottom pb-2">Main Topics</h2>
        </div>
        <div className="row mb-4">
          {blogtypesRes.map(item => (
            <div key={item.slug} className="col-12 col-sm-6 col-lg-4 pb-4 pl-3">
              <CategoryCard item={item} />
            </div>
          ))}
        </div>
      </section>
      <section className="containerBox px-3 row mb-5">
        <div className="col-12 mb-3">
          <h2 className="border-bottom pb-2">Destinations</h2>
        </div>
        <div className="row">
          {destinations.map(country =>
            country.destinations.map(item => (
              <div key={item.slug} className="col-12 col-sm-6 col-lg-4 pb-4">
                <CategoryCard item={item} />
              </div>
            )),
          )}
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/countries/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const blogtypes = await fetch(`${PUBLIC_API}/blogtypes/`);
  const blogtypesRes = await blogtypes.json();

  return {
    props: {
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      popups,
      blogtypesRes,
    },
    revalidate: 1,
  };
}

export default CategoryBlog;
