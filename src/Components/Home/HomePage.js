import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container row">
      <div className="col-6 homepage-video">
        <video autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4"></source>
        </video>
      </div>

      <div className="homepage-content col-6">
        <h2 className="title">Nơi tạo các bài trắc nghiệm tốt nhất</h2>
        <p className="desc">
          Đầy đủ chức năng và hoàn toàn miễn phí. Hãy cùng BETU Quiz Creator,
          tạo ra bài trắc nghiệm của bạn
        </p>
        <button className="btn-start">Bắt đầu ngay!</button>
      </div>
    </div>
  );
};

export default HomePage;
