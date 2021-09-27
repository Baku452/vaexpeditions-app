import Head from 'next/head';
import { useRouter } from 'next/router';
import SwiperCore, { Navigation } from 'swiper';

import { AsideBlog, BlogCard } from '@/components/index';
import { Base } from '@/layouts/index';

// import styles from './index.module.scss';

SwiperCore.use([Navigation]);
// import fetch from 'cross-fetch';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;
function BlogCategory({
  destinations,
  packagetypes,
  notifications,
  popups,
  packagesAll,
  blogtypesRes,
  blogsPosts,
}) {
  const router = useRouter();
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      popups={popups}>
      <Head>
        <title className="text-capitalize">Blog| {router.query.slug}</title>
      </Head>
      <section className="containerBox px-3">
        <div className="text-center row py-3 py-lg-5">
          <div className="col-12">
            <h1 className="titleUnderline text-capitalize">
              {router.query.slug.replace('-', ' ')}
            </h1>
            <span>{blogsPosts.length} articles</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <section className="mx-auto row">
              {blogsPosts.results.map(item => (
                <div key={item.title} className="col-12 col-md-6 col-lg-12 pb-4">
                  <BlogCard
                    key={item.slug}
                    title={item.title}
                    destination={item.destination}
                    slug={item.slug}
                    thumbnail={item.thumbnail}
                    description={item.content}
                    type={item.type_name}
                  />
                </div>
              ))}
            </section>
          </div>

          <AsideBlog destinations={destinations} blogtypesRes={blogtypesRes} />
        </div>
      </section>
    </Base>
  );
}

export async function getStaticPaths() {
  const resDest = await fetch(`${PUBLIC_API}/destinations/`);
  const dest = await resDest.json();
  const nameDest = [];

  dest.map(country => country.destinations.map(item => nameDest.push(item.title)));

  const resTypes = await fetch(`${PUBLIC_API}/blogtypes/`);
  const types = await resTypes.json();

  const arr1 = types.map(item => ({
    params: { slug: item.title },
  }));

  const arr2 = nameDest.map(item => ({
    params: { slug: item },
  }));
  const paths = [...arr1, ...arr2];

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  let id = '';

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();
  const blogtypes = await fetch(`${PUBLIC_API}/blogtypes/`);
  const blogtypesRes = await blogtypes.json();

  destinations.forEach(country => {
    country.destinations.forEach(item => {
      if (item.title.toLowerCase().replace(' ', '-') === params.slug) {
        id = `?destination=${item.id}`;
      }
    });
  });

  blogtypesRes.forEach(item => {
    if (item.title.toLowerCase().replace(' ', '-') === params.slug) {
      id = `?types=${item.id}`;
    }
  });

  const blogsReq = await fetch(`${PUBLIC_API}/blog/${id}`);
  const blogsPosts = await blogsReq.json();

  // const response = await fetch(`${PUBLIC_API}/destinations/${params.slug}`);
  // const dest = await response.json();

  return {
    props: {
      // dest,
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      blogsPosts,
      blogtypesRes,
    },
    revalidate: 1,
  };
}

export default BlogCategory;
