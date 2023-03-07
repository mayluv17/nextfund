import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h5> UserList</h5>

      {users.map((eachUser) => {
        return (
          <User key={eachUser.id} name={eachUser.name} email={eachUser.email} />
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
