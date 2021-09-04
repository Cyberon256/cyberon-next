const CustomErrorMessage = ({ errorValue, fontColor }) => (
  <div style={{ margin: 10, alignItems: "center" }}>
    <p style={{ color: fontColor, fontSize: 16 }}>{errorValue}</p>
  </div>
);

export default CustomErrorMessage;
