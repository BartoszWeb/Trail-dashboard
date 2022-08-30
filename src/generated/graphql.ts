export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BestPage = {
  __typename?: 'BestPage';
  name: Scalars['String'];
  users: Scalars['Int'];
};

export type Data = {
  __typename?: 'Data';
  avatar: Scalars['String'];
  averageTimeChart: Scalars['String'];
  bestPages: Array<BestPage>;
  clients: Array<User>;
  deviceChart: Array<Device>;
  email: Scalars['String'];
  geoChart: Array<Region>;
  id: Scalars['String'];
  project: Scalars['String'];
  sourceChart: Array<Source>;
  timeChart: WeekDays;
  usersChart: TimePeriods;
  usersTable: UsersTablePeriods;
};

export type DataToChart = {
  __typename?: 'DataToChart';
  name: Array<Scalars['String']>;
  users: Scalars['Int'];
};

export type Device = {
  __typename?: 'Device';
  name: Scalars['String'];
  value: Scalars['Int'];
};

export type Hours = {
  __typename?: 'Hours';
  hour: Scalars['String'];
  value: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<Data>;
};

export type Region = {
  __typename?: 'Region';
  fullName: Scalars['String'];
  v: Scalars['String'];
  value: Scalars['Int'];
};

export type Source = {
  __typename?: 'Source';
  name: Scalars['String'];
  users: Scalars['Int'];
};

export type TimePeriods = {
  __typename?: 'TimePeriods';
  all: Array<DataToChart>;
  month: Array<DataToChart>;
  quarter: Array<DataToChart>;
  today: Array<DataToChart>;
  week: Array<DataToChart>;
  year: Array<DataToChart>;
  yesterday: Array<DataToChart>;
};

export type Trails = {
  __typename?: 'Trails';
  id: Scalars['Int'];
  sessionDate: Scalars['Float'];
  time: Scalars['Float'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  browser: Scalars['String'];
  convertedSession: Scalars['Float'];
  country: Scalars['String'];
  device: Scalars['String'];
  firstSession: Scalars['Float'];
  id: Scalars['Int'];
  trafficSource: Scalars['String'];
  trails: Array<Trails>;
};

export type UsersTablePeriods = {
  __typename?: 'UsersTablePeriods';
  all: Array<User>;
  month: Array<User>;
  quarter: Array<User>;
  today: Array<User>;
  week: Array<User>;
  year: Array<User>;
  yesterday: Array<User>;
};

export type WeekDays = {
  __typename?: 'WeekDays';
  friday: Array<Hours>;
  monday: Array<Hours>;
  saturday: Array<Hours>;
  sunday: Array<Hours>;
  thursday: Array<Hours>;
  tuesday: Array<Hours>;
  wednesday: Array<Hours>;
};

export type GetTimeChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTimeChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', timeChart: { __typename?: 'WeekDays', sunday: Array<{ __typename?: 'Hours', hour: string, value: number }>, monday: Array<{ __typename?: 'Hours', hour: string, value: number }>, tuesday: Array<{ __typename?: 'Hours', hour: string, value: number }>, wednesday: Array<{ __typename?: 'Hours', hour: string, value: number }>, thursday: Array<{ __typename?: 'Hours', hour: string, value: number }>, friday: Array<{ __typename?: 'Hours', hour: string, value: number }>, saturday: Array<{ __typename?: 'Hours', hour: string, value: number }> } }> };

export type GetUsersTableDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersTableDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', usersTable: { __typename?: 'UsersTablePeriods', all: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }>, yesterday: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }>, year: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }>, week: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }>, month: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }>, quarter: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }>, today: Array<{ __typename?: 'User', id: number, country: string, device: string, trafficSource: string, firstSession: number, convertedSession: number, browser: string, trails: Array<{ __typename?: 'Trails', id: number, url: string, time: number, sessionDate: number }> }> } }> };

export type GetAverageChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', averageTimeChart: string }> };

export type GetBestPagesChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBestPagesChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', bestPages: Array<{ __typename?: 'BestPage', name: string, users: number }> }> };

export type GetDeviceChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDeviceChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', deviceChart: Array<{ __typename?: 'Device', name: string, value: number }> }> };

export type GetGeoChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeoChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', geoChart: Array<{ __typename?: 'Region', v: string, fullName: string, value: number }> }> };

export type GetSourceChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSourceChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', sourceChart: Array<{ __typename?: 'Source', name: string, users: number }> }> };

export type GetUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', id: string, email: string, avatar: string, project: string }> };

export type GetUsersChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersChartDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Data', usersChart: { __typename?: 'TimePeriods', all: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }>, month: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }>, year: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }>, today: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }>, yesterday: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }>, quarter: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }>, week: Array<{ __typename?: 'DataToChart', name: Array<string>, users: number }> } }> };
