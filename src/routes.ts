export const ROUTES = {
  MAIN: '/',
  COMPONENT_DETAILS: '/component/:id',
  NOT_FOUND: '*',
};

export const getComponentDetailsPath = (id: number) => `/component/${id}`;