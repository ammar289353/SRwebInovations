import "./Loader.css"; // Assuming you have a separate CSS file for styling
import Logo from '../../images/nav-logo.png'
const MiniLoader = () => {
  return (
    <div className="scrollableMain block items-center justify-center w-[21vw] h-[20vh] mt-[20vw] perspective">
      <img
        src={Logo}
        alt="P2P Clouds Official"
        className="w-[12vw] h-[10vw] mt-[4vw] absolute ml-[8vw] lg:ml-[8.5vw] animate-pulse"
      />
      <div className="cube absolute ml-[1vw] lg:ml-[5vw] mt-[5vw]">
        <div className="side s1"></div>
        <div className="side s2"></div>
        <div className="side s3"></div>
        <div className="side s4"></div>
        <div className="side s5"></div>
        <div className="side s6"></div>
      </div>
    </div>
  );
};

export default MiniLoader;
