// import { useState } from "react";

// import(useState);
// function Counter() {
//   const [count, setCount] = useState(10);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       {count}
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default Counter;

// in App =

// const [todos, setTodos] = useState([
//   {id: 1, title: "wash your dishes", completed: false},
//   {id: 2, title: "do h.w", completed: false},
//   {id: 3, title: "throw the garbage", completed: true}
// ])
// let newTodo = "";

// const handleChange = (e) => {
// newTodo = e.target.value;
// }

// const handleClick = () => {
//   setTodos([
//     ...todos, {
//       id: todos.length+1,
//       title: newTodo,
//       completed: false,
//     }
//   ])
// }

// const handleRemoveTodo = (id) => {
//   setTodos([
//     todos.filter(todos => todos.id === !id)
//   ])

// }

// <button
//   onClick={() =>
//     setTodos(
//       todos.map((todo) => {
//         return {
//           id: todo.id,
//           title: todo.title,
//           completed: true,
//         };
//         OR;
//         return {
//           ...todo,
//           completed: true,
//         };
//       })
//     )
//   }
// >
//   complete
// </button>;
// <br />
// <input type="text" placeholder="Enter your title" onChange={handleChange} />
// <button onClick = {handleClick} >add todo</button>
// <Todos  todos={todos} removeTodo={handleRemoveTodo}/>
