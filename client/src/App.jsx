import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Header';
import Layout from './components/Layout';
import IconSidebar from './components/IconSidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <IconSidebar />
         <div className="flex flex-col flex-1 ml-"> 
          <Header className="w-full fixed top-0 z-10" /> 

          <div className="flex-1"> 
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
