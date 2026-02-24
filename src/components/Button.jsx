import "./Button.css";

function Button({
  children,
  className = "",
  variant = "primary",
  icon = false,
  pill = false,
  href = null,
  target,
  rel,
  ...props
}) {
  const classes = [
    "button",
    variant && `button--${variant}`,
    icon && "button--icon-only",
    pill && "button--pill",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Component = href ? "a" : "button";

  return (
    <Component
      className={classes}
      href={href || undefined}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
