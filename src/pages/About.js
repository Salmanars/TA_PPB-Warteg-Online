// About.js

import React from "react";
import { Carousel, Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn1-production-images-kly.akamaized.net/sEHtqrk8SYPd2RPW4BMijlzleCc=/800x400/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4027224/original/020651300_1652945427-0E6A5636-01.jpeg"
            alt="Delicious Food"
          />
          <Carousel.Caption>
            <h3>Our Food</h3>
            <p>Explore our menu of delicious and satisfying dishes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/thumbnails/028/233/803/small_2x/refreshing-cup-of-hot-coffee-on-a-table-isolated-on-black-background-copy-space-cozy-warm-mood-ai-generative-photo.jpg"
            alt="Amazing Coffee"
          />
          <Carousel.Caption>
            <h3>Amazing Coffee</h3>
            <p>Indulge in our selection of amazing coffees from around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://foodandmoodcentre.com.au/wp-content/uploads/sites/129/2018/06/FermentedFood-800x400.png"
            alt="Cozy Ambiance"
          />
          <Carousel.Caption>
            <h3>Varied Menu</h3>
            <p>Explore our diverse menu, bringing the taste of Indonesian cuisine to your tongue</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="section">
        <div className="container" style={{ marginTop: 10 }}>
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Welcome Warteg Online</h2>
              <p class="text-center">
  Our user-friendly website and services make ordering your favorite food easy. In just a few clicks, you can order directly.
</p>

             
              {/* <div className="text-center mt-4">
                <Button variant="primary">Learn More</Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
