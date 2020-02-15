// Hold all endpoints data here
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
const GITHUB_BASE_API = 'https://api.github.com';

export const resolvers = {
  Query: {
    gitUsers: async (parent, args, context, info) => {
      return [
        {
          id: id,
          name: 'from graphql test',
          html_url: `${GITHUB_BASE_API} from graphql test`,
          status: 'from graphql test',
        },
      ];
    },
    gitUser: async (parent, args, context, info) => {
      let { id } = args;

      console.log('args => ', args);

      // return {
      //   id: id,
      //   name: 'from graphql test',
      //   html_url: `${GITHUB_BASE_API} from graphql test`,
      //   status: 'from graphql test',
      // }

      return await fetch(`${GITHUB_BASE_API}/users/${id}`)
        .then(res => res.json())
        .then(git_data => {
          if (git_data.id) {
            return {
              id: git_data.id,
              name: git_data.login,
              html_url: git_data.html_url,
              status: 'wip',
            };
          } else {
            // console.error('git_data => ', git_data)
            return {
              id: 404,
              name: git_data.message,
              html_url: git_data.documentation_url,
              status: git_data.message,
            };
          }
        })
        .catch(err => {
          return {
            id: 404,
            name: 'error',
            html_url: '',
            status: JSON.stringify(err),
          };
        });
    },
  },
};
