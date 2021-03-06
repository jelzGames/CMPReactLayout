import * as React from 'react'
import './styles.scss'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import { INavBarProps } from './interfaces/INavbar';

const Layout: React.FC<INavBarProps> = ({items}) => (
  <>
      <Router>
        <Navbar items={items}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
  </>
)

export default Layout
