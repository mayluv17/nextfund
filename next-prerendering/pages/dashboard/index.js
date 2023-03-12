import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>dashboard</h2>
      <h4>POsrs - {dashboardData.posts}</h4>
      <h4>Likes - {dashboardData.likes}</h4>
      <h4>Likes - {dashboardData.followers}</h4>
      <h4>Following - {dashboardData.following}</h4>
    </>
  );
}
export default Dashboard;
