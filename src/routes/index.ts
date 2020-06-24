import Dashboard from './Dashboard';
import Login from './Login';
import Table from './Table';
import Detail from './Table/Detail';
import Tree from './Tree';
import Form from './Form';
import Nested from './Nested';
import Dynamic from './Dynamic';
import RoleOnly from './Dynamic/RoleOnly';
import ManageRoutes from './Manage/Routes';
import Crud from './Crud';
import CrudDemoA from './Crud/DemoA';

export interface RoutesType {
    [key: string]: any
}

const Routes: RoutesType = {
    Dashboard,
    Login,
    Table,
    Detail,
    Tree,
    Form,
    Nested,
    Dynamic,
    RoleOnly,
    ManageRoutes,
    Crud,
    CrudDemoA
}

export default Routes