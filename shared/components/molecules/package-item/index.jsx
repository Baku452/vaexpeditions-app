import Link from 'next/link';

function Days({ days }) {
  function getNameDays(day) {
    switch (day) {
      case 0:
        return 'Half-Day';
      case 1:
        return 'Full Day';
      default:
        return `${day} days`;
    }
  }
  return <h6 className="fs-15 font-weight-bold m-0">{getNameDays(days)}</h6>;
}

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
                <Days days={days} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { PackageItem };
