
import Home from "../pages/Home/Home";
import config from '../config'

const publicRoutes = [
   // { path: config.routes.canhan, component: CaNhan },
   // { path: config.routes.khampha, component: KhamPha },
   // { path: config.routes.zing, component: Zing },
   // { path: config.routes.mv, component: MV },
   // { path: config.routes.theodoi, component: TheoDoi}
   { path: config.routes.home, component: Home}
];


const privateRoutes = [
];

export { publicRoutes, privateRoutes }
