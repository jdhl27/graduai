export type UserDetailScreen = {
  UserDetail: {
    userLogin: string;
  };
};

export type SingScreen = {
  SingIn: {};
  SingUp: {};
  ForgotPassword: {};
};

export type DashboardStack = {
  RecommendedScreen: {
    options: any[];
  };

  InstituionsScreen: {
    institutions: any[];
  };

  UniversityScreen: {
    item: any;
  };
};
