import type { Access, FieldAccess } from 'payload';

// ----------------------------------------------------------------------------
// Users Collection Access
// ----------------------------------------------------------------------------

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.role === 'super-admin');
};

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return Boolean(user?.role === 'super-admin' || user?.role === 'editor');
};

export const isSelfOrAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;
  if (user.role === 'super-admin') return true;

  // Returning a query constraint allowing the user to read/update their own document
  return {
    id: {
      equals: user.id,
    },
  };
};

export const isAdminFieldAccess: FieldAccess = ({ req: { user } }) => {
  return Boolean(user?.role === 'super-admin');
};
