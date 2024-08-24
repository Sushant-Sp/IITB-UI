// import React from 'react';
// import { FaSearch, FaTrashAlt } from 'react-icons/fa';

// const InstanceTable = ({ instances, removeInstance }) => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Course Title</th>
//             <th>Year-Sem</th>
//             <th>Code</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {instances.map((instance, index) => (
//             <tr key={index}>
//               <td>{instance.title}</td>
//               <td>{`${instance.year}-${instance.semester}`}</td>
//               <td>{instance.code}</td>
//               <td>
//                 <FaSearch />
//                 <FaTrashAlt onClick={() => removeInstance(index)} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InstanceTable;
