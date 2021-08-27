import React from 'react';
import { CardBox } from '../../molecules/card-box/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function PageContent({ page, ourpurpose }) {
    return (
        <>
            <section id="more">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-10 mx-auto">
                            <h2 className="fs-30 lh-34 font-weight-bold text-center">{page.title}</h2>
                        </div>
                    </div>
                    <div className="row pt-5 justify-content-md-center">
                        {page.original ? <>
                            <div className="col-12 col-md-4 text-justify align-self-center fs-18">
                                <div
                                    dangerouslySetInnerHTML={{ __html: page.content1 }}
                                >
                                </div>
                                {
                                    page.content2 ?
                                        <div 
                                            dangerouslySetInnerHTML={{ __html: page.content2 }}
                                        >
                                        </div>
                                        : null}
                            </div>

                            <div className="col-12 col-md-5">
                                <img 
                                    src={PUBLIC_API + page.original}
                                    alt={page.title}
                                ></img>
                            </div> </>
                            :
                            <div>
                                <div className="col-12 text-justify fs-18">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: page.content1 }}
                                    >
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-10 mx-auto">
                            <CardBox items={ourpurpose}></CardBox>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { PageContent };
