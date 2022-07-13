import React from "react";
import styles from "../../styles/VideoContent.module.scss";

const VideoContent = () => {
  return (
    <>
      <div className={styles.section3}>
        <div className={styles.section3__container}>
          <div className={styles.section3__container__title}>
            <h1>Innovation that will shape how we connect in the metaverse</h1>
            <p>Learn More > </p>
          </div>

          <video
            src="https://video.fcmb2-2.fna.fbcdn.net/v/t66.36240-2/120484629_573965607408779_696574871151867208_n.mp4?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=985c63&amp;efg=eyJybHIiOjM0NTEsInJsYSI6MTAyNCwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&amp;_nc_ohc=KQXqgF0bvVwAX-7nrap&amp;rl=3451&amp;vabr=2301&amp;_nc_ht=video.fcmb2-2.fna&amp;oh=00_AT-EWU27vMH_vSD1-XS6F6KkSgWciv-ZzlI7GnRFo3r38w&amp;oe=62D2629F"
            autoPlay="1"
            muted="1"
            loop="1"
            playsinline="1"
            poster="https://scontent.fcmb2-2.fna.fbcdn.net/v/t15.5256-10/275029566_1355045151605148_1966194741654976385_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=f2c4d5&amp;_nc_ohc=c3VmgMfqVbwAX8bfAzg&amp;_nc_ht=scontent.fcmb2-2.fna&amp;oh=00_AT--BETI6tGr5KGN-vnJyaAI1KC7_w166a9k-tLzmJzriQ&amp;oe=62D291FD"
            id="u_0_e_Jh"
          ></video>
        </div>
      </div>
    </>
  );
};

export default VideoContent;
