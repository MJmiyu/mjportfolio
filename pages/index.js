import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <h1 className={styles.Title}>My Portfolio</h1>
      <p className={styles.Paragraph}>
        Hello and welcome to my portfolio! My Name is Marthe Johanne Neverdal
        and I have recently finished my front end developer studies. I have been
        studying development from october 2018 to october 2022, while working
        part time.<br></br> Learning programming has been fun and I am always
        looking to learn more! I hope you will find my journey interresting and
        see all I have learned these years.
      </p>
      <div className={styles.Cards}>
        <Card
          title="Dog API"
          description="A simple page where you can browse and search dogbreeds"
          liveLink="http://miyuchan.net/dogapi"
          image="/images/dogbreed.png"
          link="https://github.com/MJmiyu/JSframework"
          linkName="JS Frameworks"
        />

        <Card
          title="Holidaze"
          description="Hotel booking and management site"
          liveLink="https://holidaze-opal.vercel.app/"
          image="/images/holidaze.png"
          link="https://github.com/MJmiyu/holidaze"
          linkName="Project Exam 2"
        />
        <Card
          title="Letha"
          description="Basic shoe shopping site"
          liveLink="http://miyuchan.net/Letha/"
          image="/images/letha.jpg"
          link="https://github.com/MJmiyu/Letha"
          linkName="Letha"
        />
        <Card
          title="Home Decor"
          description="Basic home decor shop"
          liveLink="http://miyuchan.net/Homedecor/"
          image="/images/home_decor.jpg"
          link="https://github.com/MJmiyu/homedecor"
          linkName="Homedecor"
        />
        <Card
          title="Space"
          description="Useage of public API"
          liveLink="http://miyuchan.net/ProjectExam1/"
          image="/images/project_exam_1.jpg"
          link="https://github.com/MJmiyu/ProjectExam1"
          linkName="Space"
        />
        <Card
          title="Re-Cycle"
          description="Small site with tour guides"
          liveLink="http://miyuchan.net/recycle/"
          image="/images/re_cycle.jpg"
          link="https://github.com/MJmiyu/re-cycle"
          linkName="Re-Cycle"
        />
        <Card
          title="Red Pepper Pizza"
          description="Small basic site with menu options"
          liveLink="http://miyuchan.net/redpepperpizza/"
          image="/images/red_pepper_pizza.jpg"
          link="https://github.com/MJmiyu/redpepperpizza"
          linkName="RedPepperPizza"
        />
        <Card
          title="Styleguide"
          description="small basic styleguide"
          liveLink="http://miyuchan.net/designca2/"
          image="/images/styleguide.jpg"
          link="https://github.com/MJmiyu/styleguide"
          linkName="Styleguide"
        />
      </div>
    </div>
  );
}
