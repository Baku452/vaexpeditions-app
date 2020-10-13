import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Banner } from '@/components/index';
import { Base } from '@/layouts/index';

export default function Home() {
  const router = useRouter();
  // console.log(router);

  useEffect(() => {
    console.log('router', router);
  }, [router]);

  return (
    <Base>
      <Banner
        title="Arequipa"
        /*  description="Wether it’s a short getway trip 
          or a long well-deserved family vacation, Valencia 
          Travel can help you choose your next destination " */
        image="images/arequipa3.jpg"
        alt="qweqw"
      />
    </Base>
  );
}
