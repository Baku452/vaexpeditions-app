import React from 'react';
import { CardBox } from '../../molecules/card-box/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function PageContent({ page, ourpurpose }) {
    return (
        <>
            <h2 className="titleUnderline fs-30 lh-34 text-center col-12">{page.title}</h2>
      <div className="col-12 pt-5 justify-content-md-center lh-34">
        {page.original ? (
          <div className="row">
            <div className="col-12 col-lg-6 text-justify align-self-center ">
              <div dangerouslySetInnerHTML={{ __html: page.content1 }} />
              {page.content2 ? (
                // eslint-disable-next-line react/no-danger
                <div dangerouslySetInnerHTML={{ __html: page.content2 }} />
              ) : null}
            </div>
            <div className="col-12 col-md-12 col-lg-6 align-self-center   ">
              <img src={PUBLIC_API + page.original} alt={page.title} className="w-100 " />
            </div>{' '}
          </div>
        ) : (
          <div>
            <div className="col-12 text-justify fs-18">
              <div dangerouslySetInnerHTML={{ __html: page.content1 }} />
            </div>
          </div>
        )}
      </div>
        </>
    );
}

export { PageContent };
