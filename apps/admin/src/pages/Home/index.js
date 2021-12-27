import React, { useEffect, useMemo, useState } from "react";
import Featured from "../../components/Featured";
import Chart from "../../components/Chart";
import Widget from "../../components/Widgets";
// import Api from '../../Api';
import axios from "axios";
import "./home.css";

// const data = [
//     {
//       month: "Jan",
//       ActiveUsers: 4000,
//       revanue: 2210,
//       growth: 11,
//       cost: 100
//     },
//     {
//       month: "Feb",
//       ActiveUsers: 3000,
//       revanue: 2110,
//       growth: -1,
//       cost: 130
//     },
//     {
//       month: "Mar",
//       ActiveUsers: 2000,
//       revanue: 3010,
//       growth: 15,
//       cost: 120
//     },
//     {
//       month: "Apr",
//       ActiveUsers: 2780,
//       revanue: 1610,
//       growth: 11,
//       cost: 130
//     },
//     {
//       month: "May",
//       ActiveUsers: 1890,
//       revanue: 1910,
//       growth: 23,
//       cost: 180
//     },
//     {
//       month: "Jun",
//       ActiveUsers: 2390,
//       revanue: 2011,
//       growth: 9,
//       cost: 230
//     },
//     {
//       month: "Jul",
//       ActiveUsers: 3490,
//       revanue: 4000,
//       growth: 36,
//       cost: 300
//     },
//     {
//       month: "Aug",
//       ActiveUsers: 4000,
//       revanue: 4200,
//       growth: 3,
//       cost: 300
//     },
//     {
//       month: "Sept",
//       ActiveUsers: 5200,
//       revanue: 6000,
//       growth: 10,
//       cost: 400
//     },
//     {
//       month: "Oct",
//       ActiveUsers: 5380,
//       revanue: 10000,
//       growth: 40,
//       cost: 800
//     },
//     {
//       month: "Nov",
//       ActiveUsers: 6010,
//       revanue: 12000,
//       growth: 12,
//       cost: 980
//     },
//     {
//       month: "Dec",
//       ActiveUsers: 7000,
//       revanue: 13020,
//       growth: 11,
//       cost: 1030
//     },
//   ];


function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get("/api/users/stats");
      console.log(res);
      const stats = res.data.sort(function (a, b) {
        return a._id - b._id;
      });
      stats.map((each) =>
        setUserData((prev) => [
          ...prev,
          { month: MONTHS[each._id - 1], total: each.total },
        ])
      );
    }
    getUserData();
  }, [MONTHS]);


  return (
    <div className="Home">
      <Featured />
      <Chart
        data={userData}
        title="User Analytics"
        dataKeyXAxis="month"
        dataKeyLine="total"
      />
      <Widget />
    </div>
  );
}

export default Home;
