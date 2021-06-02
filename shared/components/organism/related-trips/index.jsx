import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';
import { PackageItem } from '../../molecules/package-item/index';

function RelatedTrips({ packages, pack, packagetypes, activities }) {
  return (
    <Element name="related-trips" className="container pt-5 pb-5">
      <Title title="RELATED TRIPS" />
      <div className="row">
        {packages.map(item =>
          pack.id != item.id ? (
            <div key={item?.id} className="d-flex col-12 col-md-6 col-lg-4 mb-4">
              <PackageItem
                title={item.title}
                days={item.days}
                slug={item.slug}
                destination={item.destination_name}
                thumbnail={item.thumbnail}
                packagetypes={packagetypes}
                type={item.type_name}
                activity={activities.map(act =>
                  act.id == item.activity_name ? act.label : null,
                )}
              />
            </div>
          ) : null,
        )}
      </div>
    </Element>
  );
}

export { RelatedTrips };
