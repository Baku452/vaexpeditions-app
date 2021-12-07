import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import {  ContextAwareToggle } from '@/components/index';

function TravelWithPurpose() {
  return (
    <>
      
      <div className="col-12">
        <h2 className="titleUnderline fs-30 lh-34 text-center col-12">
          Our sustainability efforts
        </h2>
      </div>
          <div className="col-12 pt-5">
            <p>
              Va Expeditions wholeheartedly believes that by travelling in a sustainable
              and conscientious manner, we can transform the world and connect a myriad of
              cultures. For this reason, we are completely committed to preserving the
              magic of local communities, wildlife, and the environment. We want to share
              our local knowledge and the wisdom of the native people to contribute to a
              better world.
            </p>
          </div>

        <div className="col-12">
          <Accordion defaultActiveKey={2} className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={2} className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Fair wages</h2>
                </ContextAwareToggle>
              </Card.Header>

              <Accordion.Collapse eventKey={2}>
                <Card.Body>
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1 listStyle">
                      <p>
                        We use our inclusive and sustained economic growth to reward the
                        daily contribution of our local experts through economic
                        compensation and performance bonuses. The people that work with us
                        are not nameless faces: They are who make Va Expeditions great.
                      </p>
                      <p>
                        Each person has a story to tell. Leaders are born who make it
                        possible to think about tomorrow in a better way. People who come
                        from the breathtaking heights of the Andes, or the depths of the
                        rainforest are the people who have enabled us to build our agency
                        and operate in over 14 destinations in Central and South America.
                      </p>
                      <p>
                        We rely on them, and that’s why we treat them as equals and with
                        the respect that they deserve. This is reflected in the fair
                        salaries that we share with our great family of local experts.
                        Beyond on that, we have in place a range of incentives and
                        programs to further show our thanks to our great team of local
                        experts, including:
                      </p>
                      <ul>
                        <li>Constant training and knowledge of all areas.</li>
                        <li>
                          Organizational culture - We seek to be a great place to work
                        </li>
                        <li>Training our allies in local communities</li>
                        <li>Empowerment of female guides</li>
                        <li>Workshops and skills training in technological tools</li>
                        <li>Professional trainings in tourist destinations</li>
                        <li>Experts by areas of operation</li>
                        <li>Commission system</li>
                        <li>Fellowship meetings (lunches, walks and excursions)</li>
                        <li>Salary increases</li>
                        <li>Vouchers to use in restaurants and hotels</li>
                        <li>Travel experiences</li>
                        <li>
                          Birthday celebrations and meetings for special occasions (Labor
                          Day, company anniversary, Christmas etc.)
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/fair-wages.jpg"
                        className="d-block w-100 fit"
                        alt="Fair wages"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={3} className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">
                    Gender equality & diversity and inclusion.
                  </h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={3}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        We promote the inclusion of women as leaders and experts in our
                        various travel destinations and throughout our tourism operation,
                        always seeking gender balance in our employment practices. We
                        actively want to increase the number of employment opportunities
                        for women in the travel industry, and we firmly believe that this
                        will help us progress as a global community and a more inclusive
                        society.
                      </p>
                      <p>
                        We promote the inclusion of women as leaders and experts in our
                        various travel destinations and throughout our tourism operation,
                        always seeking gender balance in our employment practices. We
                        actively want to increase the number of employment opportunities
                        for women in the travel industry, and we firmly believe that this
                        will help us progress as a global community and a more inclusive
                        society.
                      </p>
                      <p>
                        With this initiative, we also seek to reduce the gender pay gap,
                        so that we can have more open conversations and set goals to
                        address any issues. Starting in 2020, we began to have equal
                        gender representation among our company spokespersons, to ensure
                        that we better reflect the diversity of our society. We also
                        continuously strive to empower every woman in the communities
                        where we travel with the aim of improving their job opportunities
                        and quality of life. We know it will be constant and hard work,
                        but we are endlessly motivated to walk along this particular path
                        towards a more just society.
                      </p>
                      <p>
                        <b>Our objectives:</b>
                        <br />
                        Increase employee and market sentiment regarding diversity and
                        inclusion across all of our brands.{' '}
                      </p>
                      <p>
                        <b>Diversity:</b>
                        <br />
                        Means that those of all backgrounds, life experiences, preferences
                        and beliefs are recognized and respected as individuals and valued
                        for the different perspectives they bring.{' '}
                      </p>
                      <p>
                        <b>Inclusion:</b>
                        <br />
                        Means that all are given equal opportunity to contribute to
                        business success and be their true selves, regardless of
                        background.{' '}
                      </p>
                      <p>
                        This is what the CIPD has to say: “there is a compelling moral
                        case for diversity and inclusion in the workplace and beyond.
                        Ensuring everyone is treated equally, with dignity and has their
                        fair share of resources (whether that be access to work or
                        equitable pay) is simply the right thing to do. People matter, and
                        we all should have equal opportunity to develop, progress, and be
                        rewarded and recognized at work. Organizations must ensure that
                        their people management practices champion this fundamental
                        principle.”{' '}
                      </p>
                      <p>
                        <b>Goals:</b>
                        <br />
                        Ensure that the Va Expedition teams, partners and travelers are
                        equally represented within the LGBTQ +, Indigenous and People of
                        Color communities and we as a company will not work with companies
                        that don’t support LGBT+, BLM, BAME, human rights, women´s rights,
                        workers benefits.{' '}
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/gender-equality.jpg"
                        className="d-block w-100 fit"
                        alt="Gender equality & diversity and inclusion."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={4} className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Animal protection.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={4}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        The protection of wildlife and the habitats that animals depend on
                        is of huge importance to us. All of the animal and bird species
                        throughout Central and South America, enrich the landscapes that
                        we explore when we set off on one of our adventures. These
                        countries are home to a wonderful array of flora and fauna, which
                        it is why these destinations are some of the most megadiverse
                        places on the planet. From record numbers of marine and
                        continental fish species, butterflies, bird species, amphibians
                        and a number of endemic species of mammals, many of which are
                        endangered and are protected throughout the many national parks.
                      </p>
                      <p>
                        Faced with the threats to wildlife, we have become very much
                        engaged in protecting the flora and fauna of the region. We follow
                        essential fundamentals for animal welfare, and along all of our
                        routes we take great care to respect and preserve the animal
                        world. This includes the welfare of domesticated animals such as
                        llamas, horses, donkeys, alpacas, seals, penguins and sea life
                        species along the coastal regions we visit.
                      </p>
                      <p>
                        At Va Expeditions, we follow the Five Freedoms of animal welfare:
                      </p>
                      <p>
                        <ol>
                          <li>
                            Freedom from hunger or thirst by ready access to fresh water
                            and a diet to maintain full health and vigor{' '}
                          </li>
                          <li>
                            Freedom from discomfort by providing an appropriate
                            environment including shelter and a comfortable resting area{' '}
                          </li>
                          <li>
                            Freedom from pain, injury or disease by prevention or rapid
                            diagnosis and treatment{' '}
                          </li>
                          <li>
                            Freedom to express normal behavior by providing sufficient
                            space, proper facilities and company of the animal's own kind{' '}
                          </li>
                          <li>
                            Freedom from fear and distress by ensuring conditions and
                            treatment which avoid mental suffering.{' '}
                          </li>
                        </ol>
                      </p>
                      <a
                        target="blank"
                        href="https://www.abta.com/industry-zone/sustainability-in-travel-and-tourism/animals-in-tourism">
                        https://www.abta.com/industry-zone/sustainability-in-travel-and-tourism/animals-in-tourism
                      </a>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/animal-protection.jpg"
                        className="d-block w-100 fit"
                        alt="Animal protection"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={5} className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Climate change.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={5}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        At Va Expeditions, we comply with the following guidelines that we
                        will implement in our operation:{' '}
                      </p>
                      <p>Reduction of our impact on the operation </p>
                      <ol>
                        <li>
                          Link each trip to a local conservation project that directly
                          supports the environment{' '}
                        </li>
                        <li>
                          Work with local partners to publish a transparent local economic
                          impact score for each trip.{' '}
                        </li>
                        <li>Reduce the plastic trail on every trip</li>
                      </ol>
                      <p>
                        <b>Our Goals:</b>
                        <br />
                        <ol>
                          <li>
                            <p>
                              Eliminate single-use plastics from our offices and trips
                              throughout LATIN AMERICA by 2022.
                              <br />
                              <b>How?</b>
                              <ul>
                                <li>
                                  Continue looking for opportunities, identifying best
                                  practices, and addressing plastic pollution in the
                                  destinations we visit.{' '}
                                </li>
                              </ul>
                            </p>
                          </li>
                          <li>
                            <p>
                              Reduce printed brochures by 50% by 2025
                              <br />
                              <b>How?</b>
                              <ul>
                                <li>
                                  Work with our travel partners to reduce printed
                                  brochures by 50% and take advantage of electronic
                                  brochures.{' '}
                                </li>
                                <li>
                                  Move to providing travel documents in a fully electronic
                                  way.
                                </li>
                              </ul>
                            </p>
                          </li>
                          <li>
                            <p>
                              Implement sustainable offices
                              <br />
                              <b>How?</b>
                              <ul>
                                <li>Considerable energy reduction.</li>
                                <li>Correct use of raw material.</li>
                                <li>
                                  Implementation of furniture and equipment with
                                  sustainable characteristics.
                                </li>
                                <li>Reduce CO2 emissions in a good proportion.</li>
                              </ul>
                            </p>
                          </li>
                        </ol>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/climate-change.jpg"
                        className="d-block w-100 fit"
                        alt="Climate change."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={6} className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">
                    Cultural preservation.
                  </h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={6}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        Central and South America is composed of a number of diverse
                        countries that represent an endless number of unique traditions
                        and legacies that are passed from one generation to the next, up
                        to the present day. This includes arts, gastronomy, medicinal
                        remedies, spirituality, personal values, landmarks, monuments and
                        more. We love to connect our travelers with the local heritage and
                        culture, and we consider every trip an educational and enriching
                        experience. This, in turn, helps to preserve the local traditions.{' '}
                      </p>
                      <p>
                        We ensure that every cultural exchange is carried out in an
                        ethical and sustainable way, while not interfering with or
                        altering the local traditions. As a company, we: <br />{' '}
                      </p>
                      <p>
                        Promote sustainable cultural preservation through tourism that
                        benefits communities, including through the production and sale of
                        goods and services. With this we seek to connect people with
                        opportunities that promotes and enhances the local heritage to
                        guarantee sustainable tourism models.
                        <br />{' '}
                      </p>
                      <ol>
                        <li>
                          <p>
                            <b>Our actions</b>
                            <ul>
                              <li>
                                We promote the direct purchase in the place of origin of
                                the products produced by the artisans of each locality.
                                (Looms, vessels, embroidery, pottery etc.)
                              </li>
                              <li>
                                We encourage local gastronomy and native crops through a
                                wonderful cooking class, starting your experience with the
                                sowing and harvesting of some products, depending on the
                                season.{' '}
                              </li>
                              <li>
                                We promote the expression of art through native music,
                                typical dances and songs from each native community{' '}
                              </li>
                              <li>
                                We connect travelers with new ways of understanding and
                                seeing the world, through volunteering and coexistence
                                with local communities with their customs, traditions and
                                lifestyle.{' '}
                              </li>
                              <ul>
                                <li>
                                  Finca Huayopata (production of coffee or cocoa) Peru
                                </li>
                                <li>
                                  Women’s Cultural Group and Maya Experience in Guatemala
                                </li>
                                <li>
                                  Potato Park (Preservation of ancestral varieties) Peru
                                </li>
                                <li>Milpa Eco lodge and research centre, Belize</li>
                                <li>
                                  Community projects at Señor and Tihosuco in Quinta Roo,
                                  Mexico
                                </li>
                                <li>Florida Ice and farm, Costa Rica.</li>
                              </ul>
                            </ul>
                          </p>
                        </li>
                        <li>
                          Support community-based resource management. For example, by
                          creating new opportunities that enable people living around
                          historic sites to prosper and build ecosystems for long-term
                          sustainability.
                        </li>
                      </ol>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/cultura-preservation.jpg"
                        className="d-block w-100 fit"
                        alt="Cultural preservation."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={7} className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">
                    Empowering local communities.
                  </h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={7}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        Our programs seek to create new jobs and support local development
                        through cultural preservation and the development of alternative
                        local tourist routes that ensure that investment from travelers
                        truly benefits everyone.
                      </p>
                      <p>
                        As tour operators we help encourage people to stay longer at sites
                        and contribute resources to local economies, emphasizing quality
                        over quantity, fundamental principles in our new sustainable
                        travel programs.
                      </p>
                      <p>
                        We employ local guides and community leaders so that we can learn
                        about each culture and way of life directly from those who live
                        it. In particular, we can learn from rural indigenous communities
                        about their relationship to the land and how they have practiced
                        sustainable agriculture for centuries.
                      </p>
                      <p>
                        We promote purchasing from local suppliers and ethically-sourced
                        fair trade goods. This helps guarantee that farmers and workers
                        receive fair and competitive wages and safe working conditions,
                        prevents forced or abusive child labor practices, and promotes
                        environmentally sustainable farming methods.
                      </p>
                      <p>
                        We seek work with 100% local companies, our platform model ensures
                        that the profits from our operation go to the local economy. This
                        is incredibly important for conservation as it creates viable
                        local economic alternatives in rural areas, and increases the
                        inherent value of conserving natural landscapes.
                      </p>
                      <p>
                        <b>Our objectives:</b>{' '}
                        <ol>
                          <li>
                            Increase the use of local and organic food products in our
                            supply chain by 2022.
                          </li>
                        </ol>
                        <b>How?</b>
                        <ul>
                          <li>
                            Create a baseline in 2021 of suppliers that provide local and
                            organic food on our trips and set a realistic goal to increase
                            these suppliers.{' '}
                          </li>
                          <li>
                            • To be considered local or organic, our vendors must source
                            at least 25% of their menu, either locally (any food obtained
                            within 30-50 miles of where it is prepared) or organic (any
                            product or meat obtained without the use of pesticides or GMOs
                            of sustainable origin).{' '}
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/empowering.jpg"
                        className="d-block w-100 fit"
                        alt="Empowering local communities."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle eventKey={8} className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">
                    Community philanthropy.
                  </h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={8}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        A great example of community philanthropy is in Peru where we can
                        visit the Waca Punku community, located about three hours from
                        Cusco. Here are a number of small villages located on the side of
                        a steep mountain. Every year it is a great pleasure for us to
                        bring a little Christmas cheer into the lives of the locals. We
                        dress up in our best Santa Claus costumes and make sure that
                        Christmas in this community is celebrated well.{' '}
                      </p>
                      <p>
                        Va Expeditions allocates 5% of the total tourist packages to help
                        this community. We know this won't solve all of the difficulties
                        this community faces on a day-to-day basis, but we think it's a
                        good start and a great way to promote more smiles during the
                        holiday season and make daily life a little easier.{' '}
                      </p>
                      <ol>
                        <ul>
                          <li>
                            We deliver essential groceries such as rice, beans, bread and
                            cookies for families.
                          </li>
                          <li>
                            Articles without the presence of plastic such as craft toys,
                            notebooks, pencils and healthy snacks for children. Each gift
                            is age appropriate.
                          </li>
                        </ul>
                      </ol>
                      <p>
                        We encourage our guests to save some space in their luggage to
                        bring something small to help these communities, as long as the
                        material does not contaminate or contain plastic.{' '}
                      </p>
                      <p>
                        These treasured items can be as simple as a T-shirt, a pair of
                        socks, a baseball cap, or a pair of shoes. It's okay if these
                        items are second-hand, as long as they're clean and in good
                        condition. Educational materials are also appreciated! Items like
                        notebooks, pens, pencils, rulers, and glue are local favorites. If
                        you really want to be a rock star, bring a calculator!
                      </p>
                      <p>
                        For the last three years we have been carrying out social support, where we share basic food and coats with the
                        families of Inca trailporters, all of them from the communities
                        with wich we have worked the Inca Trail route for the past 9 years{' '}
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/community-filantrophy.jpg"
                        className="d-block w-100 fit"
                        alt="Community philanthropy."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>

          <Accordion className="mb-j">
              <Card.Header>
                <ContextAwareToggle eventKey={10} className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Inclusive travel.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={10}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>
                        We want EVERYONE to be able to enjoy Central and South America.
                        That is why we always try to include facilities for those with
                        disabilities, low finance resources or other disadvantaged groups
                        with the aim to integrate people through unique travel
                        experiences.
                      </p>
                      <p>
                        We want everyone to be a part of our journey regardless of their
                        place in the world. This is a huge part of our philosophy. It is
                        for tis reason that we always try to accessibility for people with
                        special needs in our travel itineraries.
                      </p>
                      <p>
                        There are also so many people who live in the countries where we
                        travel, who simply do not have access to the incredible wonders of
                        their countries. It is heart breaking to think that people do no
                        have access to their land, history and heritage which is why we
                        try to help local people, wherever possible to have extraordinary
                        experiences that will change their lives for the better. The time
                        is now! for everyone to get to know each other and become part of
                        a global community!
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="/images/our-purpose/travel-with-purpose/inclusive-travel.jpg"
                        className="d-block w-100 fit"
                        alt="Inclusive travel."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
          </Accordion>
        </div>    
    </>
  );
}
export {TravelWithPurpose};

