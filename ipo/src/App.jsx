import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>

      </div>
    </div>
  );
}
// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (<div className="jumbotron text-center">
    <h1>Centro de Inspeções de Automóveis</h1>
    <p>IPO - ESDS1</p>
  </div>);
}
function ClientesList() {
  return (<div><h2>Clientes

    <button className="btn btn-gradient text-left float-right">
      <i className="fa fa-plus"></i>
      Atualizar
    </button>

    <button className="btn btn-dark text-left float-right">
      <i className="fa fa-plus"></i>
      Novo Cliente
    </button>

  </h2>
    <table className="table table-striped rows">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Morada</th>
          <th>NIF</th>
          <th>Opcões</th>
        </tr>
      </thead>
      <tbody>
        {/* Aqui serão listados os clientes */}
      </tbody>
      <tr>
        <td>1</td>
        <td>Julio Pinho </td>
        <td>Lisboa</td>
        <td>185763224</td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-eye"></i> </button></td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-pencil"></i> </button></td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-trash"></i> </button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Barros Silva</td>
        <td>Madeira</td>
        <td>785429675</td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-eye"></i> </button></td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-pencil"></i> </button></td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-trash"></i> </button></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Maria Juhana</td>
        <td>Leiria</td>
        <td>754863214</td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-eye"></i> </button></td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-pencil"></i> </button></td>
        <td><button className="btn btn-dark mr-1"><i className="fa fa-trash"></i> </button></td>
      </tr>
    </table>

  </div>


  );
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspecoesList() {
  return (<h2>Página de Inspeções</h2>);
}
export default App