import homeImg from '../../public/home.jpg';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="BMW E46 with ring headlights"
        title="Home Page"
      />
    </div>
  );
}
