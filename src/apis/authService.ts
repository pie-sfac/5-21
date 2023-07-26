import * as Api from '../api.ts';

type LoginData = {
  username: string;
  password: string;
};

export const loginApi = (data: LoginData) => {
  const res = Api.login(`admins/login`, data);
  return res;
};

// export const getArchiveLinks = () => {
//   const res = Api.get('archive-link-categories');
//   return res;
// };

// {
//     "archiveLinks": [
//       {
//         "id": 0,
//         "centerId": 0,
//         "category": {
//           "id": 0,
//           "title": "string",
//           "description": "string"
//         },
//         "site": "UNKNOWN",
//         "url": "string",
//         "title": "string",
//         "description": "string",
//         "createdAt": "2023-07-26T02:52:50.272Z",
//         "updatedAt": "2023-07-26T02:52:50.272Z"
//       }
//     ],
//     "message": "string"
//   }
