import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Blogs = () => {

  const blogs = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23HlNPJ0-sLQmIh6omO2K5W-hwR9GIsoz7fa-oLCeIF-Ot1-CsmDTUqs&s=10",
      category: "EYE CARE",
      title: "How to Choose the Perfect Glasses for Your Face",
      text: "Learn how different frame shapes can complement your facial features."
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0601/5415/1102/files/Audrey-Cat-eye-700x467_800x.jpg",
      category: "STYLE",
      title: "Eyewear Trends You Need to Know",
      text: "Explore modern eyewear styles that can elevate your everyday look."
    },
    {
      image:
        "https://static.royacdn.com/Site-fd18a405-e933-408f-ae7f-071263019845/EyeGlasses_BramptonEyeClinic.png",
      category: "EYE HEALTH",
      title: "Simple Habits for Healthier Eyes",
      text: "Small everyday habits can help you take better care of your eyes."
    }
  ];

  return (
    <section className="blogs-section py-5 mt-5">

      <Container>

        <div className="section-heading text-center mb-5">

          <span className="section-tag">
            FROM OUR BLOG
          </span>

          <h2 className="section-title">
            Tips, Trends &
            <span> Inspiration</span>
          </h2>

          <p className="section-description">
            Helpful guides and inspiration to help you see and look your best.
          </p>

        </div>

        <Row className="g-4">

          {blogs.map((blog, index) => (

            <Col md={6} lg={4} key={index}>

              <Card className="blog-card border-0 h-100">

                <div className="blog-image-wrapper">

                  <Card.Img
                    variant="top"
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />

                </div>

                <Card.Body>

                  <span className="blog-category">
                    {blog.category}
                  </span>

                  <Card.Title className="blog-title">
                    {blog.title}
                  </Card.Title>

                  <Card.Text className="blog-text">
                    {blog.text}
                  </Card.Text>

                   <Button variant="outline-warning" className="px-4 py-2 fw-semibold">
               Read More →
              </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
};

export default Blogs;