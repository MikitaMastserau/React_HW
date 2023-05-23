export const withSayHello = (Component) => {
   const sayHello = () => {
      alert("Hello!");
   };
   return (props) => {
      return <Component {...props} sayHello={sayHello} />
   };
};