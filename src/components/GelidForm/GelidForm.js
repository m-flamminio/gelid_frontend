const GelidForm = (props) => {
  const form = (
    <iframe
        style={{gridColumn: "1/3", width: "100%", height: "93vh", display: !props.showForm ? "none" : "unset"}}
      src="https://docs.google.com/forms/d/e/1FAIpQLSfEYwR_t6YoIKivxdajhPEKkEkU2WfUWHLFlywJA3SlSa3rzA/viewform?embedded=true"
    >
      Loading…
    </iframe>
  );

  return <>{form}</>;
};

export default GelidForm;
