/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import { transform } from 'framer-motion';

const services = [
  {
    title: 'creator owned content',
    price: 'coc, etc'
  },
  {
    title: 'Video on Demand',
    price: 'vod, etc'
  },
  {
    title: 'Video File Shareable Link',
    price: 'vfs, etc',
  },
  {
    title: 'Audio file Storage',
    price: 'as, etc',
  },
  {
    title: 'Video file Storage',
    price: 'mp4, avi, mp3, hevc, etc ',
  },
  {
    title: 'online video streaming',
    price: 'ovs, etc',
  },
  {
    title: 'Live event streaming',
    price: 'les, etc ',
  },
  {
    title: 'chat file share',
    price: 'Anyother file type'
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Didn’t find your video? Don't worry, Just upload it!"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
