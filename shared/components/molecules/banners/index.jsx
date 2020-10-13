import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Slide } from '@/components/index';
import { years } from '@/core/index';

function Banners({ destinations, banners, packagetypes }) {
  const router = useRouter();
  const [destination, setdDestination] = useState('');
  const [types, setTypes] = useState('');
  const [months, setMonths] = useState('');
  const [dates, setDates] = useState([]);

  function handleChangeDestination(event) {
    setdDestination(event.target.value);
  }

  function handleChangePackage(event) {
    setTypes(event.target.value);
  }

  function handleChangeMonth(event) {
    setMonths(event.target.value);
  }

  function handleSearch() {
    const myDate = dates.find(item => item.values === months);
    router.push({
      pathname: '/search',
      query: {
        ...router.query,
        destination,
        types,
        months: myDate?.name || '',
        ym: myDate?.values || '',
      },
    });
  }

  useEffect(() => {
    const myDates = [];
    years.forEach((year, index) => {
      year.months.forEach((month, indexMonth) => {
        month.values = `${index}-${indexMonth}`;
        if (!month.disabled) myDates.push(month);
      });
    });
    setDates(myDates);
  }, []);

  return (
    <section className="banner position-relative">
      <div className="form-destinations position-absolute">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <div className="row m-t-30 m-b-30 m-0">
                <div className="col-11 col-md-4 mx-auto m-b-25 p-0">
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={event => handleChangeDestination(event)}>
                    <option>Destinations</option>
                    {destinations.length > 0 &&
                      destinations[0].destinations.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </Form.Control>
                </div>
                <div className="col-11 col-md-4 mx-auto m-b-25 p-0">
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={event => handleChangePackage(event)}>
                    <option>Trip Type</option>
                    {packagetypes.length > 0 &&
                      packagetypes.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </Form.Control>
                </div>
                <div className="col-11 col-md-4 mx-auto m-b-25 p-0">
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={event => handleChangeMonth(event)}>
                    <option>Month of Travel</option>
                    {dates.length > 0 &&
                      dates.map(item => (
                        <option value={item.values} key={item.name}>
                          {item.name}
                        </option>
                      ))}
                  </Form.Control>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-auto text-center">
              <div className="row m-0">
                <div className="col-11 mx-auto p-0">
                  <button
                    onClick={handleSearch}
                    type="button"
                    className="btn bc-266DD8 fs-18 w-100 mw-170 text-white">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide images={banners} navigation={false} />
    </section>
  );
}

export { Banners };
