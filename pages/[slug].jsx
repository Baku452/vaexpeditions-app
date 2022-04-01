/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Base } from '@/layouts/index';
// import fetch from 'cross-fetch';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Page({ page, destinations, packagetypes, notifications, packagesAll }) {
  const reg = /\/media/g;
  const content = page.content.replace(reg, `${PUBLIC_API}/media`);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        {page.titleSEO ? (
          <title>{page.titleSEO} - Va Expeditions</title>
        ) : (
          <title>{page.title} - Va Expeditions</title>
        )}
        <meta name="description" content={page?.summary} />
        <meta name="keywords" content={page?.keywords} />
      </Head>
      <div className="containerBox px-5">
        <div className="row pt-5">
          <div className="col-12">
            <h2>{page.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/pages/list/`);
  const pages = await response.json();

  const paths = pages.results.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
  // return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/pages/${params.slug}`);
  const page = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/nav/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      page,
      destinations,
      packagetypes,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default Page;
