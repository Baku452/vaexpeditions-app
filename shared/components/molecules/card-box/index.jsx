import Link from 'next/link';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function CardBox({ items }) {
  return (
    <>
      <section id="Card box" className="containerBox">
        <h2 className="fw-bold text-center titleUnderline pb-3 m-0">More About Us</h2>
        <div className="row">
          {items.map(item => (
            <Link key={item.id} href={`/our-purpose/${item.slug}`}>
              <div className={`${styles.card} col-12 col-sm-6 col-lg-4 pb-0 pb-lg-5`}>
                <div className="w-100 overflow-hidden">
                  <img
                    src={PUBLIC_API + item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                  />
                </div>
                <div className={`${styles.body} p-2 p-md-4`}>
                  <h5 className="card-title fw-bold text-center">{item.title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export { CardBox };
