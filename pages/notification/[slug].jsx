/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Post({ notification, destinations, packagetypes }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes}>
      <Head>
        <meta name="description" content={notification.title} />
        <meta name="keywords" content={notification.keywords} />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h2>{notification.title}</h2>
            <div
              className="fs-16 lh-29"
              dangerouslySetInnerHTML={{ __html: notification?.content }}
            />
          </div>
        </div>
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await response.json();

  const paths = notifications.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/notification/${params.slug}`);
  const notification = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  return { props: { notification, destinations, packagetypes } };
}

export default Post;
