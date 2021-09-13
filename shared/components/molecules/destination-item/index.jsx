/* eslint-disable react/no-danger */
import Link from 'next/link';

const borderColor = '1px solid #e6e6e6';

function DestinationItem({ title, slug, thumbnail, content, summary }) {
  return slug ? (
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
          <div className="px-3">
            <h5
              className="lh-23"
              style={{
                fontWeight: '600',
              }}>
              {title}
            </h5>
            {summary ? <p className="fs-14">{summary}</p> : null}
            {content ? (
              <div className="fs-14" dangerouslySetInnerHTML={{ __html: { content } }} />
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="card w-100">
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
            {summary ? <p className="fs-14">{summary}</p> : null}
            {content ? (
              <div className="fs-14" dangerouslySetInnerHTML={{ __html: content }} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export { DestinationItem };
