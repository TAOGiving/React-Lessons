// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

//Same as above but using destructuting, also children is whatever is inbetween your component tags.
export default function TabButton({ children, isSelected, ...props }) {
  console.log("tabbutton component executing");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
