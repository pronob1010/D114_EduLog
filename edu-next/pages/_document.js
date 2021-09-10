import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Edufie</title>

          <link rel="icon" href="/assets/img/fevicon.png" />

          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/magnific.min.css" />
          <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.min.css" />
          <link rel="stylesheet" href="/assets/css/slick-slide.min.css" />
          <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          <link rel="stylesheet" href="/assets/css/custom-style.css" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery.3.6.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/imageloded.min.js"></script>
          <script src="/assets/js/counterup.js"></script>
          <script src="/assets/js/waypoint.js"></script>
          <script src="/assets/js/magnific.min.js"></script>
          <script src="/assets/js/isotope.pkgd.min.js"></script>
          <script src="/assets/js/nice-select.min.js"></script>
          <script src="/assets/js/fontawesome.min.js"></script>
          <script src="/assets/js/ripple.js"></script>
          <script src="/assets/js/owl.min.js"></script>
          <script src="/assets/js/slick-slider.min.js"></script>
          <script src="/assets/js/wow.min.js"></script>
          <script src="/assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
