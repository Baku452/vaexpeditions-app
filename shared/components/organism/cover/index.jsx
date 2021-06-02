import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Slide } from '@/components/index';

import styles from './index.module.scss';

function Cover({ destinations, banners, packagetypes, interests }) {
  const router = useRouter();
  const [destination, setdDestination] = useState('');
  const [types, setTypes] = useState('');
  const [interestsList, setInterestsList] = useState(interests);
  const [interestsType, setInterestsType] = useState('');

  function handleChangeDestination(event) {
    setdDestination(event.target.value);
  }

  function handleChangePackage(event) {
    setTypes(event.target.value);

    const newList = [];

    interests.forEach(interest => {
      interest.package_types.forEach(type => {
        if (Number(type) === Number(event.target.value)) newList.push(interest);
      });
    });

    setInterestsList(newList);
  }

  function handleChangeInterest(event) {
    setInterestsType(event.target.value);
  }
  const scrollButton = ref => {
    window.scrollIntoView({ top: 1500, behavior: 'smooth' });
  };
  function handleSearch() {
    router.push({
      pathname: '/search',
      query: {
        ...router.query,
        destination,
        types,
        interests: interestsType,
      },
    });
  }

  return (
    <section className="cover position-relative overflow-hidden">
      <Slide images={banners} navigation pagination={false} isHome />
      <div className={styles.form}>
        <div className="row justify-content-center">
          {/* <button className="btn btn-outline-light btn-lg mb-5"> */}
          <a className="btn btn-light btn-lg mb-5" href="/#top-rated-tours">
            See Top Rated Tours
          </a>
          {/* </button> */}
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="row m-0">
                <div className="col-11 col-lg-4 mx-auto p-0">
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={event => handleChangeDestination(event)}>
                    <option>Destination</option>
                    {
                      destinations.length > 0 &&
                        destinations.map(country =>
                          country.destinations.map(
                            item =>
                              item.active && (
                                <option value={item.id} key={item.id}>
                                  {item.title} - {item.active && `${item.sub_title}`}
                                </option>
                              ),
                          ),
                        )
                      // destinations[0].destinations.map(item => (
                      // )
                      // )
                    }
                  </Form.Control>
                </div>
                <div className="col-11 col-lg-4 mx-auto p-0">
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={event => handleChangePackage(event)}>
                    <option>All Trip Types</option>
                    {packagetypes.length > 0 &&
                      packagetypes.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </Form.Control>
                </div>
                <div className="col-11 col-lg-4 mx-auto p-0">
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={event => handleChangeInterest(event)}>
                    <option>All Interest</option>
                    {interestsList.length > 0 &&
                      interestsList.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </Form.Control>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 text-center">
              <div className="row m-0">
                <div className="col-11 col-lg-12 mx-auto p-0">
                  <button
                    onClick={handleSearch}
                    type="button"
                    className="btn btn-primary btn-block">
                    SEARCH TRIPS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Cover };
