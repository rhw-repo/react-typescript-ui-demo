import droneFootage from "../../assets/mp4/7226223-hd_1920_1080_30fps.mp4";
import styles from "./HomeHeroVideo.module.css";

const HomeHeroVideo: React.FC = () => {
  return (
    <>
      <p className="sr-only">
        Drone aerial view video of a Canadian pine forest and lake. No audio.
        Text 'HEADLINE' overlaid onto the video"
      </p>
      <div className={styles.videoSectionContainer}>
        <video
          className={styles.videoSectionVideo}
          src={droneFootage}
          autoPlay
          muted
          loop
          // iOS
          playsInline
        />
        <div className={styles.videoSectionOverlay}></div>
      </div>
    </>
  );
};

export default HomeHeroVideo;
