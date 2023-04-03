import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../FooterSection/footersection.css';
import whiteicon from '../Home/images/whiteicon.png';
import pak from '../Home/images/pk.png';


const FooterSection = () => {
    return (
        
                <Container fluid className='footer-container'>
            <Row>
                <Col xl={3} lg={6}>
                
                    <Row>
                    <h3 className='contacts'>CONTACTS</h3>
                    </Row>

                    <Row>
                    <a href="CompnayAddress" className='com-add'> 
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            <span>  IDEAX PK PVT <br/> 
                                                            PHASE 6 DHA, LGU, <br/> 
                                                            LAHORE, LH 54810 <br/> 
                                                            Pakistan </span>
                                                            <br/> <br/>
                                                            </a>
                
                
                <a href="CompanyEmail" className='com-add'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                            <span>  support@ideax.pk</span> <br/> <br/>
                                                            </a> 
                <a href="CompanyPhone" className='com-add'>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span> + 92 (0) 304-4479802</span>
                                                           
                                                            </a>
                </Row>                                          
                </Col>

                <Col xl={3} lg={6}>
                <Row>
                    <h3 className='contacts'>SERVICES</h3>
                    </Row>

                    <Row>
                    <a href="IdeaxTrade" className='com-add'> 
                    IDEAX TRADE
                                                            <br/> 
                                                            </a>
                
                
                <a href="IdeaxFiling" className='com-add'>
                IDEAX FILING <br/> 
                                                            </a> 
                <a href="IdeaxPatent" className='com-add'>
                    IDEAX PATENT
                                                           
                                                            </a>
                </Row> 
                </Col>

                <Col xl={3} lg={6}>
                    <Row>
                    <h3 className='contacts'>INFORMATION</h3>
                    </Row>

                    <Row>
                    <a href="privacypolicy" className='com-add'> 
                    Privacy Policy <br/> 
                    </a>
                    <a href="useofcookies" className='com-add'>
                    Use of Cookies <br/> 
                    </a> 
                    <a href="termsofuse" className='com-add'>
                    Terms of Use <br/>
                    </a>
                    <a href="ciaagreement" className='com-add'> 
                    CIA Agreement <br/> 
                    </a>
                    <a href="cancellationpolicy" className='com-add'>
                    Cancellation Policy <br/> 
                    </a> 
                    <a href="consumerpolicy" className='com-add'>
                    Consumer Terms & Conditions <br/>
                    </a>
                    <a href="imprint" className='com-add'>
                    Imprint
                    </a>
                    </Row>
                </Col>

                <Col xl={3} lg={6}>
                <Row>
                    <h3 className='contacts'>SOCIAL MEDIA</h3>
                    </Row>

                    <Row>
                    <p>
                    <a href="privacypolicy" className='margin'> 
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                    <span>
                    <a href="useofcookies" className='margin'>
                    <i class="fa-brands fa-facebook"></i>
                    </a> 
                    </span>
                    <span>
                    <a href="useofcookies" className='margin'>
                    <i class="fa-brands fa-square-twitter"></i>
                    </a> 
                    </span>
                    <span>
                    <a href="useofcookies" className='margin'>
                    <i class="fa-brands fa-square-youtube"></i>
                    </a> 
                    </span>
                    <span>
                    <a href="useofcookies" className='margin'>
                    <i class="fa-brands fa-pinterest-p"></i>
                    </a> 
                    </span>
                    <span>
                    <a href="useofcookies" className='margin'>
                    <i class="fa-brands fa-linkedin"></i>
                    </a> 
                    </span>
                    </p>
                    <img src={whiteicon} />
                    </Row>
                </Col>
            </Row>

            <Row>
                <p className='rights-reserved-line'>© 2023 IDEAX. All Rights Reserved.
                <span>

                    <img className='usimg' src={pak}/> Pakistan

                
                </span>
                </p>
            </Row>
        </Container>

        
     
        
        
        
 

    )
  }
  export default FooterSection;