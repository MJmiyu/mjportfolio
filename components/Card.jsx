import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ title, description, image, link, linkName, liveLink }) => {
  return (
    <div className={styles.Card}>
      <h2>{title}</h2>
      <p>{description}</p>
      {liveLink && <a href={liveLink}>{title}</a>}
      <Image src={image} width={300} height={300} />
      <a href={link}>{linkName}</a>
    </div>
  );
};

export default Card;
