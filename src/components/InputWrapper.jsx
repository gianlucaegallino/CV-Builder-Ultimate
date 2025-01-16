import "../styles/InputWrapper.css"

export default function InputWrapper({
  children = null,
  title = "Wrapper Title",
  extraclass = "",
}) {
  return (
    <div className={"inputWrapper " + extraclass}>
      <h2>{title}</h2>
      <div className="form">{children}</div>
    </div>
  );
}
