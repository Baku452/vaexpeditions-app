/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDPNPFR');
              `,
            }}
          />
        </Head>
        <body>
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDPNPFR"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `,
            }}
          />
          <Main />
          <NextScript />
          {/* <script src="//code.tidio.co/fxupl2gtslltt1kkxk8mhamlnv2o2g1i.js" async />
          <script
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `(function(W,i,s,e,P,o,p){W['WisePopsObject']=P;W[P]=W[P]||function(){(W[P].q=W[P].q||[]).push(arguments)},W[P].l=1*new Date();o=i.createElement(s),p=i.getElementsByTagName(s)[0];o.defer=1;o.src=e;p.parentNode.insertBefore(o,p)})(window,document,'script','//loader.wisepops.com/get-loader.js?v=1&site=EFULsTNKZh','wisepops');
              
              `,
            }}
          /> */}
        </body>
      </Html>
    );
  }
}
