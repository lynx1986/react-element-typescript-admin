import React from 'react';
import { Route,  BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AnimatedRouter from 'react-animated-router';
import KeepAlive, { AliveScope } from 'react-activation';
import { autorun } from 'mobx';
import { inject, observer } from 'mobx-react';

import { BasicLayout } from 'layouts';
import { AuthState } from 'stores/auth';
import { AppState } from 'stores/app';
import { MessageBox } from 'element-react';
import Routes from 'routes';
import { RouteItem } from 'api/types';



const staticRoutes: RouteItem[] = [
  { 
    path: '/login',  name: 'login', component: 'Login' 
  },
  {
    path: '/dashboard', name: 'dashboard', hasLayout: true, component: 'Dashboard',
    meta: { icon: 'dashboard', affix: true }
  },
  {
    path: '/example', name: 'example', hasLayout: true,
    meta: { icon: 'codepen' },
    children: [
      {
        path: '/table', name: 'table', component: 'Table',
        meta: { icon: 'table' },
      },
      {
        path: '/table/:id', name: 'tableDetail', hidden: true, component: 'Detail'
      },
      {
        path: '/tree', name: 'tree', component: 'Tree',
        meta: { icon: 'pic-right' },
      }
    ]
  },
  {
    path: '/form', name: 'form', hasLayout: true, component: 'Form',
    meta: { icon: 'form', cached: true },
    
  },
  {
    path: '/nested', name: 'nested', hasLayout: true,
    meta: { icon: 'double-right' },
    children: [
      {
        path: '/lvl1-A', name: 'lvl1-A', component: 'Nested',
        meta: { icon: 'double-right' },
      },
      {
        path: '/lvl1-B', name: 'lvl1-B',
        meta: { icon: 'double-right' },
        children: [
          {
            path: '/lvl2-A', name: 'lvl2-A',component: 'Nested',
            meta: { icon: 'double-right' },
          },
          {
            path: '/lvl2-B', name: 'lvl2-B', component: 'Nested',
            meta: { icon: 'double-right' }
          },
          {
            path: '/lvl2-C', name: 'lvl2-C',
            meta: { icon: 'double-right' },
            children: [
              { 
                path: '/lvl3-A', name: 'lvl3-A', component: 'Nested',
                meta: { icon: 'double-right' }
              },
              { 
                path: '/lvl3-B', name: 'lvl3-B', component: 'Nested',
                meta: { icon: 'double-right' }
              }
            ]
          },
        ]
      },
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


const getUserConfirmation = (message: string, callback: Function) => {
  MessageBox
    .confirm(message, '离开', { type: 'warning' })
    .then(() => callback(true))
    .catch(() => callback(false))
}


@inject('app', 'auth')
@observer
class AppRoute extends React.Component<AppRouteProps, AppRouteState> {

  constructor(props: AppRouteProps) {
    super(props);

    this.state = sortRoutes(staticRoutes, []);
  }

  componentDidMount() {
    autorun(() => {
      const newRoutes = this.props.auth!.routes.map(route => route);
      const newRoles = this.props.auth!.roles.map(role => role);
      this.setState(sortRoutes(staticRoutes.concat(newRoutes), newRoles));
    });
  }

  render() {

    const { blankRoutes, basicRoutes } = this.state;
    // console.log(basicRoutes, blankRoutes);

    return (
      <BrowserRouter getUserConfirmation={getUserConfirmation} basename="react-element-typescript-admin">
        <AliveScope>
          <Switch>
            {
              blankRoutes.map(route => <Route exact key={route.path} path={route.path} component={Routes[route.component!]} />)
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
        const RouteComponent = Routes[route.component];
        routeNodes.push(
          <Route exact key={basePath + route.path} path={basePath +route.path} render={
            props => (
              <KeepAlive when={this.props.app!.isCached(route)}>
                <RouteComponent {...props} />
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