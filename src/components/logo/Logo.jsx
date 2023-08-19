import "./Logo.scss";

const Logo = ({
  textSize = 20,
  textColor = "black",
  textTitle = "",
  gap = 8,
  width = 40,
  height = 50,
  style,
  imgUrl,
}) => {
  const logoStyles = {
    gap: `${gap}px`,
    ...style,
  };
  const logoImgBoxStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };
  const logoNameStyle = {
    color: `${textColor}`,
    fontSize: `${textSize}px`,
  };
  return (
    <div className="logo" style={logoStyles}>
      <div className="logoImgBox" style={logoImgBoxStyle}>
        {/* <img src={`/${textTitle}.svg`} alt="website logo" /> */}
        <img src={imgUrl} alt="website logo" />
      </div>
      <span className="logoName" style={logoNameStyle}>
        {textTitle}
      </span>
    </div>
  );
};

export default Logo;
