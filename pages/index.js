import { withApollo } from '../apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

const USER_NAME = 'lukethacoder';

const GET_GITHUB_USER_BY_NAME = gql`
  query getGithubUserByName($user_name: String!) {
    gitUser(id: $user_name) {
      id
      name
      html_url
      status
    }
  }
`;

const Index = () => {
  const { loading, data, error } = useQuery(GET_GITHUB_USER_BY_NAME, {
    variables: { user_name: USER_NAME },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>
        Fetched data from Apollo server:{' '}
        {data && (
          <a
            id={data.gitUser ? data.gitUser.id : 'no id'}
            href={data.gitUser ? data.gitUser.html_url : 'https://github.com'}
          >
            {data.gitUser ? data.gitUser.name : 'no name'}
          </a>
        )}
      </p>
    </div>
  );
};

export default withApollo(Index);
