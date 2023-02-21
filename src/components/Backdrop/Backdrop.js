const Backdrop = (props) => {
  const style = {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: "2",
    opacity: "85%",
    backgroundColor: "black",
  };

  return <div onClick={() => props.onClick()} style={style}></div>;
};

export default Backdrop;
