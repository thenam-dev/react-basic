import React from "react";

// class ChildComponent extends React.Component {
//   render() {
//     console.log(">>>call render:", this.props);
//     // let name = this.props.name;
//     // let age = this.props.age;
//     //key:value

//     let { name, age, address, arrJobs } = this.props;

//     // let a = "";
//     return (
//       <>
//         <div className="job-list">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           })}
//           {/* {console.log(">>>check map array:", a)} */}
//         </div>
//         <div>
//           Components : {name} - {age} -{address}
//         </div>
//       </>
//     );
//   }
// }

//using arrow function (Hook)
const ChildComponent = (props) => {
  let { arrJobs } = props;

  return (
    <>
      <div className="job-list">
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChildComponent;
