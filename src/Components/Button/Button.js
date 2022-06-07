export const Button = ({
    type = 'button',
    className,
    onClick,
    name,
    disabled =false
     }) => {
    return (
      <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {name}
        </button>
    );
  };
  
