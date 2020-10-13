import Link from 'next/link';

import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function Experiences({ types }) {
  return (
    <Base>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/arequipa3.jpg"
        alt="wqweqe"
      />

      <section id="more">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12">
              <h2 className="font-weight-bold text-center fs-25">
                We have travel options for every travelling style
              </h2>
            </div>
          </div>
          <div className="row pt-5">
            {types.map(type => (
              <Link
                key={type.id}
                href={{
                  pathname: '/search',
                  query: { types: type.package_type.join() },
                }}>
                <div className="col-12 col-md-3 package-types-slide">
                  <div className="vacation position-relative">
                    <img
                      src={PUBLIC_API + type.thumbnail}
                      className="d-block w-100 h-100"
                      alt={type.title}
                    />
                    <div className="vacation-info">
                      <h3 className="fs-24 font-weight-bold lh-25">{type.title}</h3>
                      <p className="fs-15 lh-27 d-none">{type.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const responseTypes = await fetch(`${PUBLIC_API}/experiences/list/`);
  const types = await responseTypes.json();

  return {
    props: {
      types,
    },
    revalidate: 1,
  };
}
