const getAssetPath = () => {
  return process.env.NODE_ENV === "production"
    ? "/production-path"
    : "/development-path";
};

module.exports = getAssetPath;
