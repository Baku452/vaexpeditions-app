import Link from 'next/link';

import { Itineraries, Rating, Slide } from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Post({ pack }) {
  return (
    <Base>
      {pack.images.length > 0 && (
        <Slide images={pack.images} title={pack.title} pagination={false} />
      )}
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <div
              className="fs-16 lh-29"
              dangerouslySetInnerHTML={{ __html: pack?.description }}
            />
          </div>
        </div>
      </div>
      <div className="package-panel">
        <div className="container package-detail">
          <div className="row pb-4 mb-3">
            <div className="col-12 col-md-4">
              <div className="row pt-4 content-details">
                <div className="col-12 pt-2 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0 font-weight-bold w-300">
                      Physical Difficulty
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.physical_difficulty} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0  font-weight-bold w-300">
                      Cultural rating
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.cultural_rating} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 pt-1 pb-3 pt-md-0 pb-md-0  fs-16 font-weight-bold w-300">
                      Wildlife expectation
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.wildlife_expectation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="row  pt-4 content-details">
                <div className="col-12 col-md-6 text-center">
                  <img
                    src={PUBLIC_API + pack?.specialist?.thumbnail}
                    alt="Contact Us"
                    className="image-circle"
                  />
                </div>
                <div className="col-12 col-md-6 text-center pt-2">
                  <h4 className="fs-20 font-weight-bold pb-3">
                    Talk to your travel specialists
                  </h4>

                  <Link href="/contact-us">
                    <a className="btn btn-contact btn-outline-dark fs-16 w-100">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container package-detail pt-5 pb-5">
        {pack?.itineraries.length > 1 && (
          <div className="row p-4">
            <div className="col-12">
              <h2 className="fs-16 m-0 font-weight-bold">DAY BY DAY SCHEDULE</h2>
            </div>
          </div>
        )}
        <Itineraries itineraries={pack?.itineraries} />
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/packages/list/`);
  const packages = await response.json();

  const paths = packages.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/package/${params.slug}`);
  const pack = await response.json();

  return { props: { pack } };
}

export default Post;
