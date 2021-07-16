export const Bar = ({ animationDuration, progress }) => (
  <div
    className='bg-indigo-600 h-1 w-full left-0 top-0 fixed z-50'
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  ></div>
);
