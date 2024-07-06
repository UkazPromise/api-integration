import React, { useContext } from 'react';
import DataTable from './components/DataTable';
import { ApiProvider } from './context/ApiContext';
import ApiContext from './context/ApiContext';
import Navbar from './components/Navbar';

const App = () => {
  const { state } = useContext(ApiContext);
  const { data, loading, error } = state;

  return (
    <ApiProvider>
      <Navbar/>
      <div className="bg-custom-graywhite">
        <h1 className='font-bold py-6 px-8'>Departmental List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <DataTable data={data} />}
      </div>
    </ApiProvider>
  );
};

export default App;
