import { visionTv } from "../../data/homeContent";

function VisionTv() {
  return (
    <section id="sec5">
      <div className="inner">
        <div className="sec5_txt">
          <p className="sec5_p2 aos-item" data-aos="fade-up" data-aos-duration="1000">
            {visionTv.title}
          </p>
        </div>
        <div className="sec5-box">
          <div className="sec5-swiper">
            <iframe
              width="1300"
              height="731"
              src={`https://www.youtube.com/embed/${visionTv.youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionTv;
