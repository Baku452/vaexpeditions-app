/* eslint-disable react/no-danger */
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';

import { Hero3, ListPackages, SearchFilter } from '@/components/index';
import { FilterContextWrapper } from '@/context/FilterContext';
import { activities } from '@/core/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function HolidayTyoe({
  resDestino,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
  interests,
}) {
  const breadcrumbs = [
    { name: 'Home', slug: '/' },
    {
      name: 'Holiday Types',
      slug: '/holiday-types',
    },
  ];

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      pixels={600}>
      <Head>
        <title>{resDestino.titleSEO || `${resDestino.title} | Va Expeditions`}</title>
        <meta
          name="description"
          content={resDestino.descriptionSEO || `${resDestino.title} Va Expeditions`}
        />
        <meta
          name="keywords"
          content={resDestino.keywordsSEO || `${resDestino.title} Va Expeditions`}
        />
      </Head>
      <Hero3
        title={resDestino.title}
        image={resDestino.image}
        alt={resDestino.title}
        breadcrumbs={breadcrumbs}
      />
      <section id="overview" className="p-3 containerBox ">
        <h2 className="title2 py-4 text-center">OVERVIEW</h2>
        <div
          className="lh-29 pb-4"
          dangerouslySetInnerHTML={{ __html: resDestino.content }}
        />
      </section>
      <FilterContextWrapper>
        <Container style={{ borderTop: '1px solid #dedede' }}>
          <Row>
            <SearchFilter
              interests={interests}
              cities={destinations}
              title={resDestino.title}
            />
            <Col md={12} lg={9}>
              <ListPackages packagetypes={packagetypes} activities={activities} />
            </Col>
          </Row>
        </Container>
      </FilterContextWrapper>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/packages/types/`);
  const types = await response.json();

  const paths = types.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const reqType = await fetch(`${PUBLIC_API}/packages/types/${params.slug}`);
  const resDestino = await reqType.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const interestResponse = await fetch(`${PUBLIC_API}/packages/interests/`);
  const interests = await interestResponse.json();

  return {
    props: {
      resDestino,
      destinations,
      packagetypes,
      notifications,
      packagesAll,
      interests,
    },
    revalidate: 60,
  };
}

export default HolidayTyoe;
