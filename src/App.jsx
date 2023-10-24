import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="row">
        <h1>Aula Bootstrap</h1>
        <div className="col-md-6 col-lg-4 col-xl-3">col-2</div>
        <div className="col-md-6 col-lg-4 col-xl-3">col-1</div>
        <div className="col-md-6 col-lg-4 col-xl-3">col-4</div>
        <div className="col-md-6 col-lg-4 col-xl-3">col-3</div>
      </div>
      <div className="text-primary text-center container border border-dark">
        Container
      </div>
      <div className="text-secondary text-left container-sm border border-dark">
        Container
      </div>
      <div className="text-success text-end container-md border border-dark">
        Container
      </div>
      <div className="bg-dark text-danger container-lg border border-dark">
        Container
      </div>
      <div className="container-xl border border-dark">Container</div>
      <div className="bg-success container-xxl border border-dark">
        Container
      </div>
      <div className="mt-5 container-fluid border border-dark">
        Container
        <p className="mx-3 p-5 border border-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
          explicabo sint odit voluptas, nulla odio alias nesciunt hic, sed
          laboriosam. Cum facere pariatur nostrum quisquam explicabo, veniam
          minima labore!
        </p>
      </div>
      <button className="btn btn-primary">Clique aqui!</button>
      <button className="btn btn-secondary">Clique aqui!</button>
      <button className="btn btn-success">Clique aqui!</button>
      <button className="btn btn-danger">Clique aqui!</button>
      <button className="btn btn-warning">Clique aqui!</button>
      <button className="btn btn-info">Clique aqui!</button>
      <button className="btn btn-litgh">Clique aqui!</button>
      <button className="btn btn-dark">Clique aqui!</button>
      <button className="btn btn-link">Clique aqui!</button>
      <br></br> <br></br>
      <button className="btn btn-outline-primary">Clique aqui!</button>
      <button className="btn btn-outline-secondary">Clique aqui!</button>
      <button className="btn btn-outline-success">Clique aqui!</button>
      <button className="btn btn-outline-danger">Clique aqui!</button>
      <button className="btn btn-outline-warning">Clique aqui!</button>
      <button className="btn btn-outline-info">Clique aqui!</button>
      <button className="btn btn-outline-lithg">Clique aqui!</button>
      <button className="btn btn-outline-dark">Clique aqui!</button>
      <button className="btn btn-outline-link">Clique aqui!</button>
      <br />
      <hr />
      <br />
      <table className="table table-striped table-bordered border-primary table-hover">
        <thead>
          <tr className="table-primary">
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>Bianca</td>
            <td>Rua Tal, 55</td>
            <td>95487-2154</td>
          </tr>
          <tr>
            <td>Matheus</td>
            <td>Rua Tal, 75</td>
            <td>94256-1434</td>
          </tr>
          <tr>
            <td>João</td>
            <td>Rua Tal, 23</td>
            <td>99823-5729</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
