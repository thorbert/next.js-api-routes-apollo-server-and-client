import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";

const Query = gql`
  query Query {
    git_user(id: "lukethacoder2") {
      id
      name
      html_url
      status
    }
  }
`;

const Index = () => {
  const git_data = useQuery(Query);
  console.log("git_data => ", git_data);
  const {
    data: { git_user }
  } = useQuery(Query);
  // const {
  //   data: { viewer }
  // } = useQuery(Query);

  if (git_user) {
    return (
      <div>
        Github user:{" "}
        <a href={git_user.html_url} target="_blank">
          {git_user.name}
        </a>{" "}
        and you're {git_user.status} goto{" "}
        <Link href="/about">
          <a>static</a>
        </Link>{" "}
        page.
      </div>
    );
  }

  return null;
};

export default withApollo(Index);
