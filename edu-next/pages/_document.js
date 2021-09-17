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

          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" rel="stylesheet"/>

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
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
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
