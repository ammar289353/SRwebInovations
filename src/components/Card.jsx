import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { FaRegArrowAltCircleRight } from "react-icons/fa";

// Service Images
import WebService from "../images/WebsiteFeatureImage.png";
import GraphicService from "../images/GraphicFeatureImage.png";
import VideoService from "../images/VideoAnimationFeatureImage.png";
import DMMService from "../images/DMMFeatureImage.webp";
import SEOService from "../images/SEOFeatureImage.png";
import { Link } from 'react-router-dom';

import Programming from "../images/Programming.png"
import Graphic from "../images/Blue-Create-Icon.webp"
import DMM from "../images/Commercial.webp"
import Video from "../images/Visual Effects.webp"
import Seo from "../images/Search Bar.png"

export default function ServiceCard() {

    // const cardsData = [
    //     {
    //       icon: (
    //         <PiPaintBrushLight className="text-[#ddbf45] hover:text-white hover:bg-[#b0a57a] bg-[#5b5025] rounded-full py-2" />
    //       ),
    //       title: "Graphic Design",
    //       description:"We create compelling graphic designs that capture your brand's essence and engage your audience, from logos to digital graphics. Let us help you make a lasting impression with high-quality, impactful visuals.",
    //       link: "/Graphic",
    //     },
    //     {
    //       icon: (
    //         <FaCode className="text-[#5454D4] hover:text-white hover:bg-[#5858bc] bg-[#b2b2d9] rounded-full py-2" />
    //       ),
    //       title: "Webiste Development",
    //       description:
    //         "We craft stunning, responsive websites that deliver exceptional user experiences, driving engagement and conversions. Let us transform your ideas into captivating digital masterpieces that achieve your business goals.",
    //       link: "/Website",
    //     },
    //     {
    //       icon: (
    //         <TfiVideoClapper className="text-[#ddbf45] hover:text-white hover:bg-[#b0a57a] bg-[#5b5025] rounded-full py-2" />
    //       ),
    //       title: "Video Animation",
    //       description:
    //         "We create captivating video animations that bring your stories to life and engage your audience. From explainer videos to animated logos, our high-quality animations are tailored to your needs, enhancing your marketing strategy.",
    //       link: "/VideoAnimation",
    //     },
    //     {
    //       icon: (
    //         <RxSpeakerLoud className="text-[#5454D4] hover:text-white hover:bg-[#5858bc] bg-[#b2b2d9] rounded-full py-2" />
    //       ),
    //       title: "Digital Marketing",
    //       description:
    //         "We propel business growth through comprehensive digital marketing services. From SEO and PPC to social media and email campaigns, we tailor strategies to boost online visibility, engage audiences, and drive conversions, ensuring measurable results that align with your goals.",
    //       link: "/DigitalMarketing",
    //     },
    //     {
    //       icon: (
    //         <IoMdSearch className="text-[#F04037] hover:text-white hover:bg-[#F04037] bg-[#a57472] rounded-full py-2" />
    //       ),
    //       title: "SEO",
    //       description:
    //         "we elevate your online presence through expert SEO services. Specializing in optimizing websites for higher rankings, organic traffic, and visibility, we employ advanced strategies including keyword research, on-page/off-page optimization, and technical SEO.",
    //       link: "/SEO",
    //     },
    //   ];


  return (
    <>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:pl-12 pt-20'>

    <Card sx={{ maxWidth: 350 }} className='my-6  ' >
      <CardMedia
        component="img"
        alt="Web Development"
        height="140"
        image={WebService}
      />
      <CardContent>
        <img className='h-[7vh]' src={Programming} alt="" />
        <h1 className='font-titleFont font-extrabold text-[4vw] md:text-[1.5vw]' >
          WEB DEVELOPMENT
        </h1>
        <Typography variant="body2" color="text.secondary" className='pr-3' >
        At SR Innovations, we craft custom web solutions that are both functional and visually stunning.
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/Website" >
      <div className="flex group gap-2 md:gap-0">
      <button className='text-[#5454D4] font-semibold' >Read More</button>
      <FaRegArrowAltCircleRight className='text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 ' />
      </div> 
        </Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 350 }} className='my-6'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={GraphicService}
      />
      <CardContent>
      <img className='h-[7vh]' src={Graphic} alt="" />
      <h1 className='font-titleFont font-extrabold text-[4vw] md:text-[1.5vw]' >
        GRAPHIC DESIGN
        </h1>
        <Typography variant="body2" color="text.secondary">
        At SR Innovations, we design impactful visuals that resonate with your audience and enhance your brand.
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/Graphic">
      <div className="flex  group gap-2 md:gap-0">
      <button className='text-[#5454D4] font-semibold' >Read More</button>
      <FaRegArrowAltCircleRight className='text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 ' />
      </div> 
        </Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 350 }} className='my-6'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={VideoService}
      />
      <CardContent>
      <img className='h-[7vh]' src={Video} alt="" />
        <h1 className='font-titleFont font-extrabold text-[4vw] md:text-[1.4vw]' >
          VIDEO ANIMATION
        </h1>
        <Typography variant="body2" color="text.secondary" className='pr-3' >
        At SR Innovations, we create captivating animations that effectively engage your audience.
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/VideoAnimation">
      <div className="flex justify-around group gap-2 md:gap-0">
      <button className='text-[#5454D4] font-semibold' >Read More</button>
      <FaRegArrowAltCircleRight className='text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 ' />
      </div>  
        </Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 350 }} className='my-6'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={DMMService}
      />
      <CardContent>
      <img className='h-[7vh]' src={DMM} alt="" />
        <h1 className='font-titleFont font-extrabold text-[4vw] md:text-[1.5vw]'>
          DIGITAL MARKETTING
        </h1>
        <Typography variant="body2" color="text.secondary">
        At SR Innovations, we develop strategies to effectively promote your brand and engage your audience.
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/DigitalMarketing">
      <div className="flex justify-around group gap-2 md:gap-0">
      <button className='text-[#5454D4] font-semibold' >Read More</button>
      <FaRegArrowAltCircleRight className='text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 ' />
      </div>  
        </Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 350 }} className='my-6'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={SEOService}
      />
      <CardContent>
      <img className='h-[7vh]' src={Seo} alt="" />
        <h1 className='font-titleFont font-extrabold text-[4vw] md:text-[1.5vw]'>
          SEO
        </h1>
        <Typography variant="body2" color="text.secondary">
        At SR Innovations, we optimize your online presence to boost search engine rankings and drive traffic.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/SEO">
        <div className="flex justify-around group gap-2 md:gap-0">
      <button className='text-[#5454D4] font-semibold' >Read More</button>
      <FaRegArrowAltCircleRight className='text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 ' />
      </div> 
        </Link>
      </CardActions>
    </Card>

    </section>
    </>
  );
}
