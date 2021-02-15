import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';
import { ContextAwareToggle, Gallery, Icon } from '@/components/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

export default function OurPurpose({ destinations, packagetypes, notifications }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Banner
        description="15 years or experience, 6,000 travellers 20 Destinations 100% Satisfation"
        image="/images/social-responsability.jpg"
        alt="weq"
      />

      <section id="more">
        <div className="container">
          <div className="row pt-5">
            <p>Falta texto Falta texto Falta texto Falta texto Falta texto Falta texto Falta texto</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container package-detail pt-5 pb-5">

          <Accordion defaultActiveKey={2} className="mb-j">
            <div>
              <Card.Header>
                <ContextAwareToggle
                  eventKey={2}
                  className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Fair wages</h2>
                </ContextAwareToggle>
              </Card.Header>

              <Accordion.Collapse eventKey={2}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>We use our inclusive and sustained economic growth to reward the daily contribution of our local experts through economic compensation and performance bonuses. The people that work with us are not nameless faces: They are what make Valencia Travel great.</p>
                      <p>Each person has a story to tell. And from the small city of Cusco, leaders are born who make it possible to think about tomorrow in a better way. People who come from the breathtaking heights of the Andes, with strong lungs that take in the purest mountain air. These are the people – the guides, porters, cooks and more – who have enabled us to build our agency at more than 3,399 meters above sea level.</p>
                      <p>We rely on them, and that’s why we treat them as equals and with the respect that they deserve. This is reflected in the fair salaries that we share with our great family of local experts. Beyond on that, we have in place a range of incentives and programs to further show our thanks to our great team of local experts, including: </p>
                      <ul>
                        <li>Constant training and knowledge of all areas.</li>
                        <li>Organizational culture - We seek to be a great place to work</li>
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
                        <li>Birthday celebrations and meetings for special occasions (Labor Day, company anniversary, Christmas etc.)</li>
                      </ul>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/fair-wages.jpg"
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
                <ContextAwareToggle
                  eventKey={3}
                  className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Gender equality & diversity and inclusion.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={3}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>We promote the inclusion of women as leaders and experts in our various travel destinations and throughout our tourism operation, always seeking gender balance in our employment practices. We actively want to increase the number of employment opportunities for women in the travel industry, and we firmly believe that this will help us progress as a global community and a more inclusive society.</p>
                      <p>It is no secret that problems surrounding gender persist in Peru, where thousands of women struggle each day simply because of their gender. To improve this situation, we know we all must contribute. We are proud of our initiatives that seek to lay the foundations of a new and fairer society, and our company is on a mission to double the number of women leaders and travel experts in our entire tourism operation.</p>
                      <p>With this initiative, we also seek to reduce the gender pay gap, so that we can have more open conversations and set goals to address any issues. Starting in 2020, we began to have equal gender representation among our company spokespersons, to ensure that we better reflect the diversity of our society. We also continuously strive to empower every woman in our Andean communities in Cusco, with the aim of improving their job opportunities and quality of life. We know it will be constant and hard work, but we are endlessly motivated to walk along this particular path towards a more just society. </p>
                      <p><b>Our objectives:</b><br />Increase employee and market sentiment regarding diversity and inclusion across all of our brands.</p>
                      <p><b>Diversity:</b><br />Means that those of all backgrounds, life experiences, preferences and beliefs are recognized and respected as individuals and valued for the different perspectives they bring.</p>
                      <p><b>Inclusion:</b><br />Means that all are given equal opportunity to contribute to business success and be their true selves, regardless of background.</p>
                      <p><b>Goals:</b><br />Ensure that the Valencia teams, partners and travelers are equally represented within the LGBTQ +, Indigenous and People of Color communities and we as as company will not work with companies that don’t support LGBT+, BLM, BAME, human rights, womens rights, workers benefits.</p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/gender-equality.jpg"
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
                <ContextAwareToggle
                  eventKey={4}
                  className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Animal protection.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={4}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>The protection of wildlife and the habitats that animals depend on is of huge importance to us. All of Peru’s numerous animal and bird species enrich the landscapes that we explore when we set off on one of our adventures. Peru may be our home, but is also home to a wonderful array of flora and fauna, which it is why it is considered a megadiverse country. It has record numbers of marine and continental fish species (around 2,000) as well as butterflies (4,000 species); it has almost 2,000 bird species, 449 amphibians and around 515 species of mammals, many of which are endangered and are protected within Peru’s many national parks. </p>
                      <p>Faced with the threats to wildlife, we have become very much engaged in protecting the flora and fauna of Peru. We follow essential fundamentals for animal welfare, and along all of our routes we take great care to respect and preserve the animal world. This includes the welfare of domesticated animals such as llamas, horses, pack donkeys, alpacas, guinea pigs, sheep and more.</p>
                      <p>At Valencia Travel, we follow the Five Freedoms of animal welfare:</p>
                      <p>
                        <ol>
                          <li>Freedom from hunger or thirst by ready access to fresh water and a diet to maintain full health and vigor.</li>
                          <li>Freedom from discomfort by providing an appropriate environment including shelter and a comfortable resting area.</li>
                          <li>Freedom from pain, injury or disease by prevention or rapid diagnosis and treatment.</li>
                          <li>Freedom to express normal behavior by providing sufficient space, proper facilities and company of the animal's own kind.</li>
                          <li>Freedom from fear and distress by ensuring conditions and treatment which avoid mental suffering.</li>
                        </ol>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/animal-protection.jpg"
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
                <ContextAwareToggle
                  eventKey={5}
                  className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Climate change.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={5}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>At Valencia Travel, we plan to comply with the following guidelines that we will implement in our operation. We have made a commitment to long-term sustainable solutions that protect our environment and minimize harmful CO2 emissions.</p>
                      <p><b>Goals:</b><br />
                        <ol>
                          <li><p>Eliminate single-use plastics from our offices and trips throughout by 2022.<br />
                            <b>How?</b><ul>
                              <li>Continue looking for opportunities, identifying best practices, and addressing plastic pollution in the destinations we visit.</li>
                            </ul>
                          </p>
                          </li>
                          <li><p>Reduce printed brochures by 50% by 2025<br />
                            <b>How?</b><ul>
                              <li>Work with our travel partners to reduce printed brochures by 50% and take advantage of electronic brochures.</li>
                              <li>Move to providing travel documents in a fully electronic way.</li>
                            </ul>
                          </p>
                          </li>
                          <li><p>Implement sustainable offices<br />
                            <b>How?</b><ul>
                              <li>Considerable energy reduction.</li>
                              <li>Correct use of raw material.</li>
                              <li>Implementation of furniture and equipment with sustainable characteristics.</li>
                              <li>Reduce CO2 emissions in a good proportion.</li>
                            </ul>
                          </p>
                          </li>
                        </ol>
                      </p>
                      <p>Our goal is to be one of the companies that does the most to help the planet and our society. We have objectives to meet in the short term and we are very enthusiastic about taking the first steps:</p>
                      <ol>
                        <li>Obtain B corp certification.</li>
                        <li>Linking each trip with a local conservation project that it directly supports.</li>
                        <li>Work with local partners to publish a transparent local economic impact score for each trip.</li>
                      </ol>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/climate-change.jpg"
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
                <ContextAwareToggle
                  eventKey={6}
                  className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Cultural preservation.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={6}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>Peru is a diverse country that represents an endless number of unique traditions and legacies that are passed from one generations to the next, up to the present day. This includes arts, gastronomy, medicinal remedies, spirituality, personal values, landmarks, monuments and more. We love to connect our travelers with the local heritage and culture, and we consider every trip an educational and enriching experience. This, in turn, helps to preserve the local traditions.</p>
                      <p>We ensure that every cultural exchange is carried out in an ethical and sustainable way, while not interfering with or altering the local traditions. As a company: <br />
                        <ol>
                          <li><p>We promote sustainable cultural preservation through tourism that benefits communities, including through the production and sale of goods and services. With this we seek to connect people with opportunities that promotes and enhances the local heritage to guarantee sustainable tourism models.<br />
                            <b>How?</b><ul>
                              <li>We promote the direct purchase in the place of origin of the products produced by the artisans of each locality. (Looms, vessels, embroidery, etc).</li>
                              <li>We encourage local gastronomy and native crops through a wonderful cooking class, starting your experience with the sowing and harvesting of some products, depending on the season.</li>
                              <li>We promote the expression of art through native music, typical dances and songs from each community</li>
                              <li>We connect travelers with new ways of understanding and seeing the world, through volunteering and coexistence with local communities with their customs, traditions and lifestyle.</li>
                            </ul>
                          </p></li>
                          <li><p>Support community-based resource management.<br />
                            <b>How?</b><ul>
                              <li>Creating new opportunities that enable people living around historic sites to prosper and build ecosystems for long-term sustainability.</li>
                            </ul>
                          </p></li>
                        </ol>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/cultura-preservation.jpg"
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
                <ContextAwareToggle
                  eventKey={7}
                  className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Empowering local communities.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={7}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>Our tourism programs seek to create new jobs and support local development through cultural preservation and the development of alternative local tourist routes that ensure that investment from travelers truly benefits everyone.</p>
                      <p>As tour operators we help encourage people to stay longer at sites and contribute resources to local economies, emphasizing quality over quantity, fundamental principles in our new sustainable travel programs.</p>
                      <p>We employ local guides and community leaders so that we can learn about each culture and way of life directly from those who live it. In particular, we can learn from rural indigenous communities about their relationship to the land and how they have practiced sustainable agriculture for centuries.</p>
                      <p>We promote purchasing from local suppliers and ethically-sourced fair trade goods. This helps guarantee that farmers and workers receive fair and competitive wages and safe working conditions, prevents forced or abusive child labor practices, and promotes environmentally sustainable farming methods.</p>
                      <p>We seek work with 100% local companies, our platform model ensures that the profits from our operation go to the local economy. This is incredibly important for conservation as it creates viable local economic alternatives in rural areas, and increases the inherent value of conserving natural landscapes.</p>
                      <p><b>Goals:</b> <ol>
                        <li>Increase the use of local and organic food products in our supply chain by 2022.</li>
                      </ol>
                        <b>How?</b><ul>
                          <li>Create a baseline in 2021 of suppliers that provide local and organic food on our trips and set a realistic goal to increase these suppliers.</li>
                          <li>To be considered local or organic, our vendors must source at least 25% of their menu, either locally (any food obtained within 30-50 miles of where it is prepared) or organic (any product or meat obtained without the use of of pesticides or GMOs of sustainable origin).</li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/empowering.jpg"
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
                <ContextAwareToggle
                  eventKey={8}
                  className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Community philanthropy.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={8}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>One of our main approaches is to visit the Waca Punku community, located about three hours from Cusco. Here are a number of small villages located on the side of a steep mountain. Every year it is a great pleasure for us to bring a little Christmas cheer into the lives of the locals. We dress up in our best Santa Claus costumes and make sure that Christmas in this community is celebrated well.</p>
                      <p>Valencia Travel allocates 5% of the total tourist packages to help this community. We know this won't solve all of the difficulties this community faces on a day-to-day basis, but we think it's a good start and a great way to promote more smiles during the holiday season and make daily life a little easier.</p>
                      <p><ul>
                        <li>We deliver essential groceries such as rice, beans, bread and cookies for families.</li>
                        <li>Articles without the presence of plastic such as craft toys, notebooks, pencils and sweets for children. Each gift is age appropriate.</li>
                      </ul></p>
                      <p>We encourage our guests to save some space in their luggage to bring something small to help these communities, as long as the material does not contaminate or contain plastic.</p>
                      <p>These treasured items can be as simple as a T-shirt, a pair of socks, a baseball cap, or a pair of shoes. It's okay if these items are second-hand, as long as they're clean and in good condition. Educational materials are also appreciated! Items like notebooks, pens, pencils, rulers, and glue are local favorites. If you really want to be a rock star, bring a calculator!</p>
                      <p>For the last three years we have been carrying out social supports, where we share basic food and coats with the families of our porters, all of them from the communities with which we have worked the Inca Trail route for 9 years for the Valencia Travel company.</p>
                      <ul>
                        <li><b>WacaHuasi:</b> This community is located four hours from the city of Cusco is located in the district of Lares, provinces of Urubamba.</li>
                        <li><b>Amaru de Pisac:</b> This community is located in the Sacred Valley of the Incas 45 minutes from the city of Cusco.</li>
                        <li><b>Paruparu - Pisac District:</b> This community is located in the Sacred Valley of the Incas 45 minutes from the city of Cusco.</li>
                        <li><b>Quello quello - District of Pisac:</b> This community is located in the Sacred Valley of the Incas 45 minutes from the city of Cusco.</li>
                        <li><b>Yurac turuyoc - Yanatile:</b> This community is located six hours from the city of Cusco, Paucartambo province. </li>
                        <li><b>Sacsayhuaman - Ocoongate:</b> This community that is located four hours from the city of Cusco one vehicle. </li>
                        <li><b>Quehuayllo - Ccapi:</b> This community is located three and a half hours away by car. </li>
                      </ul>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/community-filantrophy.jpg"
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
            <div>
              <Card.Header>
                <ContextAwareToggle
                  eventKey={9}
                  className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">The spirit of the Inca trails.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={9}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>There were once 30,000 kilometers of Inca roads and trails that connected Peru, Argentina, Bolivia, Ecuador Colombia and Chile. Cusco was the capital of the Inca Empire and the point where the roads converged, demonstrating the capital’s supremacy as the “navel of the world.” These roads connected people for centuries, and made it possible for the empire to grow.</p>
                      <p>At Valencia Travel, we follow in this same spirit of building metaphorical roads that can connect people, while at the same time discovering new paths to explore and follow. We follow the principle that made it possible to connect and unify people many centuries ago. It is very important to us as a company that these Andean interconnections are not lost. Rather, that they spread to the furthest reaches of our global community of travelers.</p>
                      <p><b>Goals:</b><br />
                        <p>Achieve a 20% increase in itineraries visiting developing destinations for specialty brands by 2025.</p>
                        <b>How?</b><ul>
                          <li>Introducing travelers to developing destinations and supporting greater distribution of tourism revenue within the destination to combat over-tourism.</li>
                          <li>Promote new regions we have not been to before.</li>
                          <li>Show destinations that do not show symptoms of over tourism.</li>
                          <li>Boost secondary cities or regions that support a greater diffusion of tourism.</li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/the-spirits-of-inca-trail.jpg"
                        className="d-block w-100 fit"
                        alt="The spirit of the Inca trails."
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
                <ContextAwareToggle
                  eventKey={9}
                  className="content-white">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Health of the population.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={9}>
                <Card.Body className="content-white">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>We have a heritage of superfoods to share, and we are often surprised that eating habits in our region are being replaced by unhealthy alternatives, especially among our children. We want our population to continue growing strong and healthy.</p>
                      <p><b>How?</b><ul>
                        <li>Value diets based on healthy and traditional ingredients of the region: quinoa, kiwicha, cañihua, maca, yacón, chestnuts, carob, sacha inchi, giant Cusco corn, purple corn, camu. camu, custard apple, soursop, lucuma, mangoes, grapes, tangerines and more!</li>
                        <li>Include 25% of superfoods in our travelers' meals</li>
                        <li>Promote this great culinary tradition that our ancestors left us, in our Andean communities through training and workshops.</li>
                        <li>Promote in every way, both Peruvians and our foreign visitors.</li>
                      </ul></p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/health-of-population.png"
                        className="d-block w-100 fit"
                        alt="Health of the population."
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
                <ContextAwareToggle
                  eventKey={10}
                  className="content-gray">
                  <h2 className="fs-16 m-0 font-weight-bold p-0">Inclusive travel.</h2>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={10}>
                <Card.Body className="content-gray">
                  <div className="row pb-4 itinerary">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                      <p>We want everyone to be able to enjoy Peru and the many tours that we offer. That’s why, whenever possible, we include facilities for people with physical disabilities and limited financial resources, with the aim of integrating vulnerable groups and people with disabilities into our travel experiences.</p>
                      <p>We want everyone to be a part of our journey regardless of their condition in the world -- that's our philosophy. We understand that more than a third of the world's population is directly affected by some sort of disability. For this reason, we challenge ourselves to always provide accessibility for people with disabilities in our travel packages.</p>
                      <p>Similarly, in Peru there are thousands of people who, despite living in a megadiverse territory with many natural wonders, do not have access to them. It is incredibly sad that some people cannot experience their own land, of which they are a part. We want everyone to be a part of our experience, especially our Andean brothers and sisters. We want to provide them with extraordinary experiences that can change their lives for the better. It is time for everyone to get to know each other and become part of a global community.</p>
                      <p><b>How?</b><ul>
                        <li>Include equipment for people with physical disabilities and limited financial resources</li>
                        <li>Integrate vulnerable groups and people with disabilities in our travel experiences. (Free trips to people from our communities or with disabilities)</li>
                        <li>Provide extraordinary experiences to our communities so they can improve their lives.</li>
                      </ul>
                      </p>
                    </div>
                    <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2 text-right">
                      <img
                        src="images/our-purpose/travel-with-purpose/inclusive-travel.jpg"
                        className="d-block w-100 fit"
                        alt="Inclusive travel."
                      />
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </div>
      </section>
      <section id="mision_vision">
        <div className="container bc-F7F5F5 mt-5 pt-5">
          <div className="row pt-5 pb-5">
            <div className="col-10 mx-auto">
              <div className="row m-b-5">
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="why-valencia-travel" className="link-our">
                      <img
                        src="images/why-chose-valencia-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Why Valencia Travel"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Why Valencia Travel
                          </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="travel-with-purpose" className="link-our">
                      <img
                        src="images/social-responsability-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Travel with Purpose"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Travel with Purpose
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="our-core-values" className="link-our">
                      <img
                        src="images/our-values-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Our core values"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Our core values
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row m-b-5">
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="valencia-travel-history" className="link-our">
                      <img
                        src="images/history-of-the-valencia-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Valencia Travel history"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Valencia Travel history
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="our-philosophy" className="link-our">
                      <img
                        src="images/our-philosophy-min.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Our philosophy"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Our philosophy
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <div className="card">
                    <a href="local-experts" className="link-our">
                      <img
                        src="images/local-experts.jpg"
                        height="247"
                        className="card-img-top"
                        alt="Local Experts"
                      />
                      <div className="card-body">
                        <div className="row align-items-start justify-content-start">
                          <div className="col-12 text-center">
                            <h5 className="card-title purpose">
                              Local Experts
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();


  return {
    props: {
      destinations,
      packagetypes,
      notifications
    },
  };
}
