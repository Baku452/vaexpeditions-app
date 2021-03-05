import Link from 'next/link';

const borderColor = '1px solid #e6e6e6';

function DestinationItem({ title, slug, thumbnail, summary }) {
  return (
    <Link href={slug}>
      <div className="card w-100 cursor-pointer">
        <img src={thumbnail} className="card-img-top" alt={title} />

        <div
          className="card-body py-3 px-2"
          style={{
            borderLeft: borderColor,
            borderRight: borderColor,
            borderBottom: borderColor,
          }}>
          <div className="row align-items-start justify-content-start">
            <div className="col-12">
              <h5 className="card-title font-weight-semibold fs-18 lh-23">{title}</h5>
              <p className="fs-14">{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { DestinationItem };
