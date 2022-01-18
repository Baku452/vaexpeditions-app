/* eslint-disable react/no-danger */
/* eslint-disable import/extensions */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Collaborator({
  collaborator,
  destinations,
  packagetypes,
  notifications,
  packagesAll,
}) {
  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}>
      <Head>
        <title>{collaborator.full_name} - Va Expeditions</title>
        <meta
          name="description"
          content={`${collaborator.full_name} - Va Expeditionsl `}
        />
      </Head>
      <div className="containerBox py-5">
        <section id={collaborator.full_name} className="row px-5 px-xl-0 py-5">
          <div className="text-center col-12 col-sm-4 pb-5">
            <img
              className="img-fluid"
              alt={collaborator.full_name}
              src={PUBLIC_API + collaborator.thumbnail}
            />
          </div>
          <div className="col-12 col-sm-8">
            <h1>{collaborator.full_name}</h1>
            <h3 className="text-primary">{collaborator.job}</h3>
            <p>{collaborator.description}</p>
            {collaborator.hobbies ? (
              <>
                <h3 className="title">Hobbies</h3>
                <div
                  className="listStyle"
                  dangerouslySetInnerHTML={{ __html: collaborator.hobbies }}
                />
              </>
            ) : null}
          </div>
        </section>
        <section className="row justify-content-center">
          <Link href="/about/our-people#OurTeam">
            <button type="button" className="col-3 text-center btn btn-primary">
              Show Team
            </button>
          </Link>
        </section>
      </div>
    </Base>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/collaborators/`);
  const listCollaborators = await response.json();

  const paths = listCollaborators.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${PUBLIC_API}/collaborators/${params.slug}`);
  const collaborator = await response.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/home/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  return {
    props: {
      collaborator,
      destinations,
      packagetypes,
      notifications,
      packagesAll,
    },
    revalidate: 60,
  };
}

export default Collaborator;
