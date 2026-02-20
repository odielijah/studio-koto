import "../../assets/styles/feedPost.css";
import { feedPosts } from "../../data/feedPostsData.js";
import { motion } from "framer-motion";

function renderFeed() {
  return feedPosts.map((feedPost, index) => (
    <motion.div
      className="col-feed"
      key={index}
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="feed">
        <a className="cursor-read" href="#">
          <div className="video-box">
            {feedPost.type === "video" && (
              <video
                src={feedPost.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="video"
              />
            )}
            {feedPost.type === "image" && (
              <img src={feedPost.src} alt={feedPost.title} loading="lazy" />
            )}
          </div>

          <h2 className="feed-title">{feedPost.title}</h2>
        </a>

        <div
          className="feed-text"
          dangerouslySetInnerHTML={{ __html: feedPost.text }}
        />
        {feedPost.link && (
          <div
            className="feed-link hoverable"
            dangerouslySetInnerHTML={{ __html: feedPost.link }}
          />
        )}
      </div>
    </motion.div>
  ));
}

export default function FeedPost() {
  return (
    <div className="feed-container">
      <div className="container">
        <div className="row">{renderFeed()}</div>
      </div>
    </div>
  );
}
