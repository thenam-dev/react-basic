import React from "react";

class ChildComponent extends React.Component {
  //Re-render
  state = { showJobs: false };

  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnclickDelete = (job) => {
    console.log(">>> handle onclick delete:", job);
    this.props.deleteAJob(job);
  };

  render() {
    // console.log(">>>call render:", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    //key:value
    let { showJobs } = this.state;
    let { name, age, address, arrJobs } = this.props;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>>check conditional:", check);

    return (
      <>
        <div>
          Components : {name} - {age} - {address}
        </div>
        <br />
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
              {/* {console.log(">>>check map array:", a)} */}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

//using arrow function (Hook)
// const ChildComponent = (props) => {
//   let { arrJobs } = props;

//   return (
//     <>
//       <div className="job-list">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 1000) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}$
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
