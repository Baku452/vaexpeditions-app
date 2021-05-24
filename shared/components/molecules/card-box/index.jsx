import Link from 'next/link';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function CardBox({ items }) {
    return (
        <>
            <section className={styles.package}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className={`${styles.card} row`}>
                                {items.map(item => (
                                    <Link key={item.id} href={`/${item.slug}`}>
                                        <div className="d-flex col-12 col-md-6 col-lg-6 col-xl-4 pb-4 mb-2">
                                            <div className={styles.card}>
                                                <img
                                                    src={PUBLIC_API + item.thumbnail}
                                                    className="card-img-top"
                                                    alt={item.title}
                                                />

                                                <div className={`${styles.body} p-4`}>
                                                    <h5 className="card-title mb-2 fs-18 font-weight-bold">
                                                        {item.title}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { CardBox };
