import styles from './Card.module.css';

const Card = ({ title, description, image, link, linkName, liveLink }) => {
  return (
    <div className={styles.Card}>
      <h2 className={styles.CardTitle}>{title}</h2>

      <p>{description}</p>

      <img src={image} alt={title} className={styles.Image} />

      {liveLink && (
        <a className={styles.Link} href={liveLink}>
          Live page
        </a>
      )}

      <a className={styles.Link} href={link}>
        {linkName}
      </a>
    </div>
  );
};

export default Card;
