
import { Route, createBrowserRouter, createRoutesFromElements, Navigate} from 'react-router-dom';
import { routPages } from './route-pages';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        {routPages.map((route, index) => <Route key = {index} path = {route.path} element={<route.element />}/>
            )}
        <Route path = "*" element = {<Navigate to = "/home" replace/>}/>
      </Route>
    )
  )

export default router;