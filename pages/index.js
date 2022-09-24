import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <h1 className={styles.Title}>My Portfolio</h1>
      <div className={styles.Cards}>
        <Card
          title="Dog API"
          description="A simple page where you can browse and search dogbreeds"
          image="/images/dogbreed.png"
          link="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-MJmiyu"
          linkName="JS Frameworks"
        />
        <Card
          title="Active Footwear"
          description="Small e-commerce site selling shoes"
          image="/images/activefootwear.png"
          link="https://github.com/MJmiyu/semester_project2"
          linkName="Semester Project 2"
        />
        <Card
          title="Holidaze"
          description="Hotel booking and management site"
          liveLink="https://holidaze-opal.vercel.app/"
          image="/images/holidaze.png"
          link="https://github.com/Noroff-FEU-Assignments/project-exam-2-MJmiyu"
          linkName="Project Exam 2"
        />
      </div>
    </div>
  );
}
