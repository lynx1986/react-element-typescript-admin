import { RouteItem } from "../routes";

export const getMatchedRoutes = function(path: string, routes: RouteItem[]): RouteItem[] {

  const matchedRoute = routes.find(route => isPathMatched(route.fullPath!, path, (route.children != undefined && route.children.length > 0)));

  if (!matchedRoute) {
    return [];
  }

  if (matchedRoute.children) {
    return [matchedRoute].concat(getMatchedRoutes(path, matchedRoute.children!));
  } else {
    return [matchedRoute];
  }
}

export const isPathMatched = function (routeFullPath: string, locationPath: string, hasChildren: boolean): boolean {

  const pathVarStartIdx = routeFullPath.indexOf('/:')
  if (pathVarStartIdx > 0) {
      const pathVarEndIdx = routeFullPath.indexOf('/', pathVarStartIdx + 1);
      const pathVariable = pathVarEndIdx > 0 ? 
          routeFullPath.substring(pathVarStartIdx + 1, pathVarEndIdx) :
          routeFullPath.substring(pathVarStartIdx + 1);
      routeFullPath = routeFullPath.replace(pathVariable, '[A-Za-z0-9]*');
      console.log('Replace pathvariable path=' + routeFullPath + ' pathVariable=' + pathVariable);
      return isPathMatched(routeFullPath, locationPath, hasChildren);
  }

  const reg = new RegExp('^' + routeFullPath + (hasChildren ? '' : '$'));
  const isMatched = reg.test(locationPath);
  console.log(routeFullPath, locationPath, isMatched);

  return isMatched;
}