// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

//Same as above but using destructuting, also children is whatever is inbetween your component tags.
export default function TabButton({ children }) {
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
