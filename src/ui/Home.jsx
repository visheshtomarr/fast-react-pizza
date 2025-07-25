import { useSelector } from "react-redux";
import CreateUser from "./../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="my-10 px-4 text-center sm:py-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username.split(" ")[0]}
        </Button>
      )}
    </div>
  );
}

export default Home;
