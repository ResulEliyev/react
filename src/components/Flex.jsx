const flexStyles = (props) => ({
  display: props.inline ? "inline-flex" : "flex",
  justifyContent: props.justifyContent,
  flexDirection: props.flexDirection,
  alignItems: props.alignItems,
  gap: props.gap ? props.gap + "px" : undefined,
});

export default ({
  justifyContent,
  flexDirection,
  alignItems = "center",
  gap,
  ...props
}) => {
  const AsElement = props.as ?? "div";
  return (
    <AsElement
      className={props.className}
      style={flexStyles({ justifyContent, flexDirection, alignItems, gap })}
    >
      {props.children}
    </AsElement>
  );
};
