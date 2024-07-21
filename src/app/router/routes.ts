export const routes = {
  home: () => '/',

  codeWars: {
    main: () => '/code-wars',
    codeWarsById: (id: string) => `/code-wars/${id}`,
  },
};
