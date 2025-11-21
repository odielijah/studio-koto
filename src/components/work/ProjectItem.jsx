export default function ProjectItem({ item, index }) {
  const gridClass = `grid-space-${(index % 4) + 1}`;
  const isVimeo = item.vimeoUrl;
  const isVideo = item.video;
  const isImage = item.image;

  return (
    <a
      data-orientation={item.orientation}
      className={`project-item ${gridClass} group relative overflow-hidden bg-gray-700`}
    >
      {isVimeo && (
        <div className="relative inset-0 w-full h-full overflow-hidden">
          <iframe
            src={item.vimeoUrl}
            className="absolute top-1/2 left-1/2 w-full h-full inset-0 -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {isVideo && (
        <video
          src={item.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {isImage && (
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </a>
  );
}
