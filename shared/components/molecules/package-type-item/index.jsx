import Link from 'next/link';

function PackageTypeItem({ id, title, thumbnail }) {
  return (
    <Link
      href={{
        pathname: `/search`,
        query: { types: id },
      }}>
      <div className="card w-100 cursor-pointer">
        {thumbnail == null ? (
          <img src={thumbnail} className="card-img-top" alt={title} />
        ) : (
          <img src="/images/colca.jpg" className="card-img-top" alt={title} />
        )}
        <div
          className="position-absolute p-3 text-center w-100"
          style={{
            bottom: '0',
            background: 'rgba(0,0,0,.7)',
          }}>
          <h5 className="text-white font-weight-bold pt-1">{title}</h5>
        </div>
      </div>
    </Link>
  );
}

export { PackageTypeItem };
