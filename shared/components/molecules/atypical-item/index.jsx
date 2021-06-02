/* eslint-disable react/no-danger */
import Link from 'next/link';

function AtypicalItem({ title, slug, thumbnail, content }) {
  return (
    <Link href={slug}>
      <div className="card w-100 cursor-pointer">
        <img src={thumbnail} className="card-img-top" alt={title} />

        <div className="card-body py-3 px-2 bordered">
          <div className="row align-items-start justify-content-start">
            <div className="col-12">
              <h5 className="card-title font-weight-semibold fs-18 lh-23">{title}</h5>
              <p className="fs-14" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { AtypicalItem };
