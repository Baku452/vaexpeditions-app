/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { VscSearchStop } from 'react-icons/vsc';

import { PackageItem } from '@/components/index';

import styles from './index.module.scss';

function SortingItemsRegular({
  packagetypes,
  packagesList,
  setPackagesList,
  activities,
}) {
  const [activeId, setActiveId] = useState(0);
  const sortByname = id => {
    setActiveId(id);
    const sorted = [...packagesList];
    switch (id) {
      case 0:
        sorted.sort(function (a, b) {
          if (a.rating < b.rating) {
            return 1;
          }
          if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        });
        break;
      case 1:
        sorted.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case 2:
        sorted.sort(function (a, b) {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case 3:
        sorted.sort(function (a, b) {
          if (a.days > b.days) {
            return 1;
          }
          if (a.days < b.days) {
            return -1;
          }
          return 0;
        });
        break;
      case 4:
        sorted.sort(function (a, b) {
          if (a.days < b.days) {
            return 1;
          }
          if (a.days > b.days) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        break;
    }

    setPackagesList(sorted);
  };

  return (
    <div className="row">
      {packagesList ? (
        <div className="col-12">
          <div className={`${styles.bar} d-none d-lg-flex p-3 justify-content-center`}>
            <div
              className={`m-3 underlined ${activeId === 0 ? 'activeFilter' : ''}`}
              role="button"
              onClick={() => sortByname(0)}>
              Top rated tours
            </div>
            <div
              className={`m-3 underlined ${activeId === 1 ? 'activeFilter' : ''}`}
              role="button"
              onClick={() => sortByname(1)}>
              Name A - Z
            </div>
            <div
              className={`m-3 underlined ${activeId === 2 ? 'activeFilter' : ''}`}
              role="button"
              onClick={() => sortByname(2)}>
              Name Z - A
            </div>
            <div
              className={`m-3 underlined ${activeId === 3 ? 'activeFilter' : ''}`}
              role="button"
              onClick={() => sortByname(3)}>
              Shortest - Longest
            </div>
            <div
              className={`m-3 underlined ${activeId === 4 ? 'activeFilter' : ''}`}
              role="button"
              onClick={() => sortByname(4)}>
              Longest - Shortest
            </div>
          </div>
          <div className="row">
            {packagesList.length > 0 ? (
              packagesList.map(item => (
                <div key={item?.slug} className="col-12 col-md-6 col-lg-4 mb-4">
                  <PackageItem
                    key={item.slug}
                    title={item.title}
                    days={item.days}
                    slug={item.slug}
                    thumbnail={item.thumbnail}
                    type={item.type_name}
                    destination={item.destination_name}
                    featured={item.featured}
                    packagetypes={packagetypes}
                    activity={activities.map(act =>
                      act.id.toString() === item.activity_name.toString()
                        ? act.label
                        : null,
                    )}
                  />
                </div>
              ))
            ) : (
              <>
                <div className="row mx-auto p-5">
                  <div className="col-12">
                    <h3 className="text-center mx-auto">
                      We couldn't find any product according the filter
                    </h3>
                  </div>
                  <div className="col-12 text-center">
                    <VscSearchStop size={50} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { SortingItemsRegular };
