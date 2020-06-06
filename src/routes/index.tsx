import React from 'react';
import { Route,  BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AnimatedRouter from 'react-animated-router';
import KeepAlive, { AliveScope } from 'react-activation';
import { reaction } from 'mobx';
import { inject, observer } from 'mobx-react';

import { BasicLayout } from '../layouts';

import Login from './Login';
import Dashboard from './Dashboard';
import { AuthState } from '../stores/auth';
import { AppState } from '../stores/app';
import Table from './Table';
import Tree from './Tree';
import Form from './Form';
import Nested from './Nested';
import Dynamic from './Dynamic';
import RoleOnly from './Dynamic/RoleOnly';

export interface RouteItem {
  path: string;
  name?: string;
  redirect?: string;
  hidden?: boolean;
  component?: any;
  hasLayout?: boolean;
  fullPath?: string;
  meta?: {
    roles?: string[];
    title?: string;
    icon?: string;
    cached?: boolean;
    breadcrumb?: boolean;
    affix?: boolean;
  };
  children?: RouteItem[];
}


const staticRoutes: RouteItem[] = [
  { 
    path: '/login',  name: 'login', component: Login 
  },
  {
    path: '/dashboard', name: 'dashboard', hasLayout: true, component: Dashboard,
    meta: { icon: 'dashboard', affix: true }
  },
  {
    path: '/example', name: 'example', hasLayout: true,
    meta: { icon: 'codepen' },
    children: [
      {
        path: '/table', name: 'table', component: Table,
        meta: { icon: 'table' }
      },
      {
        path: '/tree', name: 'tree', component: Tree,
        meta: { icon: 'pic-right' },
      }
    ]
  },
  {
    path: '/form', name: 'form', hasLayout: true, component: Form,
    meta: { icon: 'form', cached: true },
    
  },
  {
    path: '/nested', name: 'nested', hasLayout: true,
    meta: { icon: 'double-right' },
    children: [
      {
        path: '/lvl1-A', name: 'lvl1-A', component: Nested,
        meta: { icon: 'double-right' },
      },
      {
        path: '/lvl1-B', name: 'lvl1-B',
        meta: { icon: 'double-right' },
        children: [
          {
            path: '/lvl2-A', name: 'lvl2-A',component: Nested,
            meta: { icon: 'double-right' },
          },
          {
            path: '/lvl2-B', name: 'lvl2-B', component: Nested,
            meta: { icon: 'double-right' }
          },
          {
            path: '/lvl2-C', name: 'lvl2-C',
            meta: { icon: 'double-right' },
            children: [
              { 
                path: '/lvl3-A', name: 'lvl3-A', component: Nested,
                meta: { icon: 'double-right' }
              },
              { 
                path: '/lvl3-B', name: 'lvl3-B', component: Nested,
                meta: { icon: 'double-right' }
              }
            ]
          },
        ]
      },
    ]
  }
];


const dynamicRoutes: RouteItem[] = [
  {
    path: '/dynamic', name: 'dynamic', hasLayout: true,
    meta: { icon: 'box-plot' },
    children: [
      {
        path: '', name: 'dynamicIndex', component: Dynamic,
        meta: { icon: 'box-plot' }
      },
      {
        path: '/adminOnly', name: 'adminOnly', component: RoleOnly,
        meta: { roles: ['admin'], icon: 'user' }
      },
      {
        path: '/roleAOnly', name: 'roleAOnly', component: RoleOnly,
        meta: { roles: ['roleA'], icon: 'user' }
      }
    ]
  }
];

interface AppRouteProps {
  auth?: AuthState,
  app?: AppState,
}

interface AppRouteState {
  blankRoutes: RouteItem[];
  basicRoutes: RouteItem[]
}

function sortRoutes(routes: RouteItem[], roles: string[]): { blankRoutes: RouteItem[], basicRoutes: RouteItem[] } {
  const blankRoutes: RouteItem[] = [];
  const basicRoutes: RouteItem[] = [];
  routes.forEach(route => {

    route = filterRouteByRoles(route, roles)!;

    if (route.hasLayout) {
      basicRoutes.push(route);
    } else {
      blankRoutes.push(route);
    }
  });

  return { blankRoutes, basicRoutes };
}

function filterRouteByRoles(route: RouteItem, roles: string[], basePath=''): RouteItem | null {

  // if (!roles || roles.length === 0) {
  //   route.fullPath = basePath + route.path;
  //   return route;
  // }

  if (route.meta && route.meta.roles) {
    if (!route.meta.roles.find(role => roles.indexOf(role) >= 0)) {
      return null;
    }
  }

  const filteredRoute = Object.assign({ fullPath: basePath + route.path }, route);
  
  if (filteredRoute.children) {
    const cRoutes: RouteItem[] = [];
    filteredRoute.children.forEach(cRoute => {
      const authorizedRoute = filterRouteByRoles(cRoute, roles, filteredRoute.fullPath);
      if (authorizedRoute) {
        cRoutes.push(authorizedRoute);
      }
    });
    filteredRoute.children = cRoutes;
  }

  return filteredRoute;
}

@inject('app', 'auth')
@observer
class AppRoute extends React.Component<AppRouteProps, AppRouteState> {

  constructor(props: AppRouteProps) {
    super(props);

    this.state = sortRoutes(staticRoutes, []);
  }

  componentDidMount() {
    reaction(
      () => this.props.auth!.roles.map(role => role), 
      (roles) => {
        this.setState(sortRoutes(staticRoutes.concat(dynamicRoutes), roles));
    });
  }

  render() {

    const { blankRoutes, basicRoutes } = this.state;
    console.log(basicRoutes, blankRoutes);

    return (
      <BrowserRouter>
        <AliveScope>
          <Switch>
            {
              blankRoutes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)
            }
            {
              <BasicLayout routes={basicRoutes}>
                <AnimatedRouter className="fadeInOut-enter">
                  { this.renderBasicRoutes(basicRoutes) }
                  <Redirect from='/' to='/dashboard' />
                </AnimatedRouter>
              </BasicLayout>
            }
          </Switch>
        </AliveScope>
      </BrowserRouter>
    );
  }

  renderBasicRoutes(routes: RouteItem[], basePath=''): JSX.Element[] {

    let routeNodes: JSX.Element[] = [];
    routes.forEach(route => {
      if (route.component) {
        routeNodes.push(
          <Route exact key={basePath + route.path} path={basePath +route.path} render={
            props => (
              <KeepAlive when={this.props.app!.isCached(route)}>
                <route.component {...props} />
              </KeepAlive>
            )
          } />
        )
      } else {
        const childrenRouteNodes = this.renderBasicRoutes(route.children!, basePath + route.path);
        routeNodes = routeNodes.concat(childrenRouteNodes);
      }
    });
    return routeNodes;
  }
}

export default AppRoute;