// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = props => {
  
  //console.log(props.i)
 
 const plus = () => {
   props.onVote('+', props.i)
   // Call props.onVote to increase the vote count for this product
 };
 const minus = () => {
   props.onVote('-', props.i)
   // Call props.onVote to decrease the vote count for this product
 };
 return (
   <li>
     <span>{props.p.name}</span> - <span>votes: {props.p.votes}</span>
     <button onClick={plus}>+</button>{" "}
     <button onClick={minus}>-</button>
   </li>
 );
};

const GroceryApp = (props) => {
 let [products, setProducts] = React.useState(props.products);
 const onVote = (dir, index) => {
   // Update the products array accordingly ...
   console.log(dir, index)
   
   
   
   setProducts(old => old.map((p, i) => {
     if (index === i) {
       return { ...p, votes: eval(`${p.votes}${dir}1`) }
     }
     return p;
   }))
 };
 
 console.log(JSON.stringify(products))

 return (
   <ul>
     {products && products.map((p, i) => 
       <Product
         onVote={onVote}
         key={`${p.name}`.toLowerCase()}
         p={p}
         i={i}
       />)}
     {/* Render an array of products, which should call onVote when + or - is clicked */}
   </ul>
 );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GroceryApp
 products={[
   { name: "Oranges", votes: 0 },
   { name: "Bananas", votes: 0 }
 ]}
/>);

setTimeout(() => {
 let plusButton = document.querySelector("ul > li > button");
 if(plusButton) {
   plusButton.click();
 }
 setTimeout(() => {
   console.log(document.getElementById('root').outerHTML);
 });
});