import React from "react";
import axios from "axios";
import "./ListUser.scss";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //   console.log(">>> test res:", res.data.data);
    // });

    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });

    // try {
    //   let res = await axios.get("https://reqres.in/api/users?page=2");
    //   // 2. Cập nhật state (thêm kiểm tra dữ liệu)
    //   this.setState({
    //     listUser: res && res.data && res.data.data ? res.data.data : [],
    //   });
    // } catch (error) {
    //   // 3. Bắt lỗi Network Error tại đây để không làm treo ứng dụng
    //   console.error("Lỗi lấy dữ liệu:", error.message);
    // }
    console.log(">>>check res:", res.data.data);
  }
  render() {
    let listUser = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {index + 1} - {item.first_name} - {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListUser;
