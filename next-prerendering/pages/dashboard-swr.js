import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSwr() {
  // const [isLoading, setIsLoading] = useState(true);
  const { data, error } = useSWR("dashboard/api", fetcher);
  if (error) return "an error occured";
  if (!data) return "Loading..";
  return (
    <>
      <h2>dashboard</h2>
      <h4>POsrs - {data.posts}</h4>
      <h4>Likes - {data.likes}</h4>
      <h4>Likes - {data.followers}</h4>
      <h4>Following - {data.following}</h4>
    </>
  );
}
export default DashboardSwr;
