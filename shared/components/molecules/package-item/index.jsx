import Link from 'next/link';

function PackageItem({ id, title, days, slug, thumbnail }) {
  return (
    <Link href={`/package/${slug}`}>
      <div
        key={id}
        className="d-flex col-12 col-md-6 col-lg-4 mb-4 package-item cursor-pointer">
        <div className="card w-100">
          <img src={thumbnail} className="card-img-top" alt={title} />

          <div className="card-body">
            <div className="row align-items-start justify-content-start">
              <div className="col-12">
                <h5 className="card-title fs-18 lh-23">{title}</h5>
                <h6 className="fs-15 font-weight-bold m-0">
                  {days > 1 ? `${days} days` : 'Half-Day'}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { PackageItem };
