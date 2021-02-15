import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';
import { PackageItem } from '../../molecules/package-item/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function OptionalTours({ packages, pack }) {
    return (
        <Element name="optional-tours" className="container pt-5 pb-5">
            <Title title="OPTIONAL TOURS" />
            <div className="row">
                {packages.map(item => (
                    pack.id != item.id ?
                        <div key={item?.id} className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                            <PackageItem
                                title={item.title}
                                days={item.days}
                                slug={item.slug}
                                thumbnail={PUBLIC_API + item.thumbnail}
                            // thumbnail={item.thumbnail}

                            />
                        </div>
                        : null))}
            </div>
        </Element>
    );
}

export { OptionalTours };
