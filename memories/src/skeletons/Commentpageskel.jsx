import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#d1d1d1"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" />
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
    <rect x="2" y="58" rx="2" ry="2" width="242" height="242" />
    <rect x="56" y="330" rx="0" ry="0" width="174" height="34" />
    <rect x="59" y="378" rx="0" ry="0" width="174" height="36" />
    <circle cx="25" cy="349" r="20" />
    <circle cx="25" cy="397" r="20" />
  </ContentLoader>
);

export default MyLoader;
