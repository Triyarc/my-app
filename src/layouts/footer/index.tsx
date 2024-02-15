import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FooterContainer } from '../../components/style/layoutStyle/Footer.styled';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer className='red pt-1 '>
      <Container>
        <Row className='mt-lg-5 mt-md-4 mt-3'>
          <Col lg={4} className='pe-md-5'>
            <div>
              <img src='' alt='LOGO' />
            </div>
            <div className='mt-3'>
              <p className='f_logo_description'>
                Trust is the belief that someone or something is reliable,
                truthful, and capable of meeting our expectations.
              </p>
            </div>
          </Col>
          <Col lg={4} className='ps-md-4 ps-lg-5'>
            <div>
              <p className='f_head'>UseFul Links</p>
            </div>
            <div className='f_useful_link_links'>
              <ul>
                <li>
                  <a href='#' title=''>
                    Pets For Mating{' '}
                  </a>
                </li>
                <li>
                  <a href='#'>Pets For Adaption</a>
                </li>
                <li>
                  <a href='#'>Category</a>
                </li>
                <li>
                  <a href='#'>Popular pets</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} className='pe-md-5'>
            <div>
              <p className='f_head'>Follow us</p>
            </div>
            <div className='f_social_media_icons'>
              <RiInstagramFill />
              <BsTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
              <RiWhatsappFill />
            </div>
            <form className='f_enquiry_input mt-4 '>
              <label className='w-100 f_head'>Enquiry</label>
              <textarea
                className='w-100'
                placeholder='Address your enquiry with email ...'
                id='w3review'
                name='w3review'
                rows={3}
              ></textarea>
              <div>
                <input type='submit' value='Submit' />
              </div>
            </form>
          </Col>
        </Row>
      </Container>

      <div className='f_copyright_section py-3 '>
        <div className='f_useFull_links'>
          <a href='#'>Home </a>
          <a href='#'>About Us </a>
          <a href='#'>Contact Us</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Blogs</a>
        </div>
        <p className='m-0'>© 2023 All Rights Reserved</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
