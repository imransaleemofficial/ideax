import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaLongArrowAltRight } from 'react-icons/fa';
import '../WhyWeDifferent/WhyWeDifferent.css';
import image from '../images/difference.jpg';


const WhyWeDifferent = () => {
    return (
        
<body>
<Container fluid className='why-we-differ'>
      <Row>
        
        <Col xxl={6} lg={8} md={12} xs={12}>
        <p className='robototext'>The Reason Have Made For You To Visit This Website.</p>
        <h3 className='sectionboldtext'>Why We Are Different?</h3>
        <p className='robototext2'>Patents can be protected through a combination of legal and practical measures. Here are some ways in which patents can be protected:</p>
        <table className='table'>
  <tr>
    <td className='robotobold'>* File a patent application</td>
    <td className='robotobold'>* Conduct a patent search</td>
    <td className='robotobold'>* Enforce the patent</td>
  </tr>
  <tr>
    <td className='robotobold'>* Mark the product</td>
    <td className='robotobold'>* Keep the invention confidential</td>
    <td className='robotobold'>* License the patent</td>
  </tr>
  <tr>
    <td className='robotobold'>* Monitor the market</td>
    <td className='robotobold'>* Patent Drafting Training Program</td>
    <td className='robotobold'>* Technology and Innovation Support Centers (TISCs)</td>
  </tr>
</table>
<p className='paratext'>
    Overall, protecting a patent requires a combination of legal and practical measures to ensure that the patent owner's rights are upheld and the invention is not copied or stolen.
</p>
<p className='paratext2'>
    Before filing a patent application, it's important to conduct a thorough patent search to ensure that the invention is new and non-obvious. This will also help to identify any existing patents that may be similar to the invention.
</p>
<br></br>
<Button variant="outline-primary" className='button-arrow'>Read More <FaLongArrowAltRight/> </Button>{' '}

        </Col>
      </Row>
      <br></br>
                   <br></br>
                   <br></br>
    </Container>
    
</body>

    );
  };
  export default WhyWeDifferent;
