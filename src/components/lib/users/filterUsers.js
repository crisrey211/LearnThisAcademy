import { SORT_OPTIONS } from '../../../constants/sortOption';
import { USER_ROLES } from '../../../constants/userRoles';

export const filterActiveUser = (user, active) => {
  if (!active) return [...user];

  return user.filter(item => item.active);
};

export const sortUsers = (user, sortBy) => {
  const sortedUsers = [...user];
  switch (sortBy) {
    case SORT_OPTIONS.NAME:
      return sortedUsers.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    case SORT_OPTIONS.ROLE:
      return sortedUsers.sort((a, b) => {
        if (a.role === b.role) return 0;
        if (a.role === USER_ROLES.TEACHER) return -1;
        if (a.role === USER_ROLES.STUDENT && b.role === USER_ROLES.OTHER)
          return -1;
        return 1;
      });
    case SORT_OPTIONS.ACTIVE:
      return sortedUsers.sort((a, b) => {
        if (a.active === b.active) return 0;
        if (a.active && !b.active) return -1;
        return 1;
      });
    default:
      return sortedUsers;
  }
};

export const filterUsersByName = (user, search) => {
  if (!search) return [...user];

  const lowerCaseSearch = search.toLowerCase();
  return user.filter(item => item.name.toLowerCase().includes(lowerCaseSearch));
};
