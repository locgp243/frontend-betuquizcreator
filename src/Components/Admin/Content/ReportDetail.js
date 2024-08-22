import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReportDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    handleGetAccountQuiz();
  }, []);
  const handleGetAccountQuiz = async () => {
    let res = await axios.get(
      `https://localhost:7067/api/Quizs/${id}/accounts`
    );
    console.log("Check res: ", res.data.$values);
    setData(res.data.$values);
  };
  console.log(id);
  return (
    <div className="report-detail-container">
      <h1>Thống kê</h1>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Điểm</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.$id}</th>
                  <td>{item.username}</td>
                  <td>{item.point}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReportDetail;
